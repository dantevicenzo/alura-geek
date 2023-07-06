import { InputHTMLAttributes } from 'react'
import styles from './textarea.module.css'

interface IInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ id, placeholder, ...props }: IInputProps) {
  return (
    <div className={styles.customInputWrapper}>
      <textarea id={id} placeholder={placeholder} {...props} />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  )
}
