import { InputHTMLAttributes } from 'react'
import styles from './input.module.css'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ id, placeholder, ...props }: IInputProps) {
  return (
    <div className={styles.customInputWrapper}>
      <input id={id} placeholder={placeholder} {...props} />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  )
}
