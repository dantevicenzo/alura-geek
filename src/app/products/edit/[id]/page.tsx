'use client'

import { Button } from '@/components/button'
import styles from './page.module.css'

import Input from '@/components/input'
import Textarea from '@/components/textarea'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { IProduct } from '@/app/gallery'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const editProductFormValidationSchema = z.object({
  url: z
    .string()
    .nonempty({
      message: 'O campo imagem é obrigatório.',
    })
    .url({
      message: 'Insira uma URL válida.',
    }),
  category: z.string().nonempty({
    message: 'O campo categoria é obrigatório.',
  }),
  name: z
    .string()
    .nonempty({
      message: 'O campo nome é obrigatório.',
    })
    .max(20, {
      message:
        'Limite de caracteres excedido. Por favor, insira no máximo 20 caracteres.',
    }),
  price: z.number({
    required_error: 'O campo preço é obrigatório',
  }),
  description: z
    .string()
    .nonempty({
      message: 'O campo descrição é obrigatório.',
    })
    .max(150, {
      message:
        'Limite de caracteres excedido. Por favor, insira no máximo 150 caracteres.',
    }),
})

type TEditProductFormData = z.infer<typeof editProductFormValidationSchema>

interface IEditProductProps {
  params: {
    id: string
  }
}

export default function EditProduct({ params }: IEditProductProps) {
  const [products, setProducts] = useState<IProduct[]>(useLocalStorage())
  const productToEdit = products.find(
    (product) => product.id === Number(params.id),
  )

  useEffect(() => {
    localStorage.setItem('@alura-geek:products-1.0.0', JSON.stringify(products))
  }, [products])

  useEffect(() => {
    setValue('category', productToEdit?.category as string)
    setValue('description', productToEdit?.description as string)
    setValue('name', productToEdit?.name as string)
    setValue('price', (productToEdit?.price as number) / 100)
    setValue('url', productToEdit?.imageUrl as string)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TEditProductFormData>({
    resolver: zodResolver(editProductFormValidationSchema),
    mode: 'all',
  })

  function onSubmit(formData: TEditProductFormData) {
    const updatedProduct: IProduct = {
      id: productToEdit!.id,
      imageUrl: formData.url,
      category: formData.category,
      name: formData.name,
      price: formData.price * 100,
      description: formData.description,
    }

    const updatedProducts = products.map((product) => {
      if (product.id === productToEdit!.id) {
        return updatedProduct
      } else {
        return product
      }
    })

    setProducts(updatedProducts)

    alert('O produto foi atualizado com sucesso.')

    reset()
  }

  return (
    <div className={styles.container}>
      <form
        action="submit"
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Editar produto: #{productToEdit?.id}</h1>
        <Input
          {...register('url', { required: true })}
          placeholder="URL da imagem"
        />
        {errors.url && (
          <span className={styles.error}>{errors.url.message}</span>
        )}
        <Input
          {...register('category', { required: true })}
          placeholder="Categoria"
        />
        {errors.category && (
          <span className={styles.error}>{errors.category.message}</span>
        )}
        <Input
          {...register('name', { required: true, maxLength: 20 })}
          placeholder="Nome do produto"
        />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
        <Input
          {...register('price', {
            required: true,
            setValueAs: (v) => (v === '' ? undefined : parseFloat(v)),
          })}
          type="number"
          pattern="[0-9]+([,\.][0-9]+)?"
          min="0"
          step="any"
          placeholder="Preço do produto"
        />
        {errors.price && (
          <span className={styles.error}>{errors.price.message}</span>
        )}
        <Textarea
          {...register('description', { required: true, maxLength: 150 })}
          placeholder="Descrição do produto"
        />
        {errors.description && (
          <span className={styles.error}>{errors.description.message}</span>
        )}
        <Button
          type="submit"
          variantColor="blue"
          variantPadding="fill"
          responsivity={false}
        >
          Salvar
        </Button>
      </form>
    </div>
  )
}
