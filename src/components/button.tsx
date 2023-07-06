import { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from './button.module.css'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variantColor: 'blue' | 'transparent'
  variantPadding: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  variantColor,
  variantPadding,
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[variantColor]} ${styles[variantPadding]}`}
    >
      {children}
    </button>
  )
}
