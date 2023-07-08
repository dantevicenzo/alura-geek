'use client'

import { Button } from '@/components/button'
import styles from './page.module.css'

import Input from '@/components/input'
import Textarea from '@/components/textarea'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const addNewProductFormValidationSchema = z.object({
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

type TAddNewProductFormData = z.infer<typeof addNewProductFormValidationSchema>

export default function AddNewProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAddNewProductFormData>({
    resolver: zodResolver(addNewProductFormValidationSchema),
    mode: 'all',
  })

  function onSubmit(formData: TAddNewProductFormData) {
    reset()
  }

  return (
    <div className={styles.container}>
      <form
        action="submit"
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Adicionar novo produto</h1>
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
          Adicionar produto
        </Button>
      </form>
    </div>
  )
}
