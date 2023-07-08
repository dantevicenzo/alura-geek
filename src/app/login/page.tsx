'use client'

import { Button } from '@/components/button'
import styles from './page.module.css'
import Input from '@/components/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'

const loginFormValidationSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: 'O campo email é obrigatório.',
    })
    .email({ message: 'Endereço de email inválido' }),
  password: z.string().nonempty({
    message: 'O campo senha é obrigatório.',
  }),
})

type TLoginFormData = z.infer<typeof loginFormValidationSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    mode: 'onBlur',
  })

  const router = useRouter()

  function onSubmit(formData: TLoginFormData) {
    router.push('/products')
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <strong>Iniciar Sessão</strong>
        <Input
          {...register('email', { required: true })}
          type="email"
          placeholder="Escreva seu email"
          className={!errors.email ? styles.valid : ''}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
        <Input
          {...register('password', { required: true })}
          type="password"
          placeholder="Escreva sua senha"
          className={!errors.password ? styles.valid : ''}
        />
        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
        <Button type="submit" variantColor="blue" variantPadding="lg">
          Entrar
        </Button>
      </form>
    </div>
  )
}
