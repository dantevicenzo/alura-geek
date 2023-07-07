'use client'

import Image from 'next/image'

import styles from './footer.module.css'
import logo from '@/assets/logo.svg'
import { Button } from './button'
import Link from 'next/link'
import Input from './input'
import Textarea from './textarea'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import emailjs from '@emailjs/browser'

const contactFormValidationSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: 'O campo nome é obrigatório.',
    })
    .max(40, {
      message: 'O campo não pode exceder o limite máximo de 40 caracteres',
    }),
  message: z
    .string()
    .nonempty({
      message: 'O campo mensagem é obrigatório.',
    })
    .max(120, {
      message: 'O campo não pode exceder o limite máximo de 120 caracteres',
    }),
})

type TContactFormData = z.infer<typeof contactFormValidationSchema>

export function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContactFormData>({
    resolver: zodResolver(contactFormValidationSchema),
    mode: 'onBlur',
  })

  function sendEmail(senderName: string, message: string) {
    const templateParams = {
      senderName,
      senderEmail: 'alurageek@gmail.com',
      message,
      subject: 'Alura Geek - Nova Mensagem',
    }

    console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
    console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
    console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      )
      .then(() => {
        alert('Mensagem Enviada!')
        reset()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function onSubmit(formData: TContactFormData) {
    console.log(formData)
    sendEmail(formData.name, formData.message)
  }

  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.logoNavContainer}>
            <Image src={logo} height={50} width={176} alt="" />

            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link href="">Quem somos nós</Link>
                </li>
                <li>
                  <Link href="">Política de privacidade</Link>
                </li>
                <li>
                  <Link href="">Programa fidelidade</Link>
                </li>
                <li>
                  <Link href="">Nossas lojas</Link>
                </li>
                <li>
                  <Link href="">Quero ser franqueado</Link>
                </li>
                <li>
                  <Link href="">Anuncie aqui</Link>
                </li>
              </ul>
            </nav>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <strong>Fale conosco</strong>
            <Input
              placeholder="Nome"
              {...register('name', { required: true, maxLength: 50 })}
            />
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
            <div
              className={
                errors.name === undefined ? styles.textareaMarginTop : ''
              }
            >
              <Textarea
                placeholder="Escreva sua mensagem"
                {...register('message', { required: true, maxLength: 120 })}
              />
              {errors.message && (
                <span className={styles.error}>{errors.message?.message}</span>
              )}
            </div>
            <Button type="submit" variantColor="blue" variantPadding="sm">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
      <div className={styles.developedBy}>
        <span>Desenvolvido por Dante Vicenzo</span>
        <span>2023</span>
      </div>
    </footer>
  )
}
