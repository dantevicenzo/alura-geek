import { InputHTMLAttributes, forwardRef } from 'react'
import styles from './input.module.css'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
  { id, placeholder, ...props },
  ref,
) {
  return (
    <div className={styles.customInputWrapper}>
      <input id={id} placeholder={placeholder} {...props} ref={ref} />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  )
})

Input.displayName = 'Input'

export default Input
