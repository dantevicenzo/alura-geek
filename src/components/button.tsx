import { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from './button.module.css'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variantColor: 'blue' | 'transparent'
  variantPadding: 'sm' | 'md' | 'lg' | 'fill'
  responsivity?: boolean
}

export function Button({
  children,
  variantColor,
  variantPadding,
  responsivity = true,
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[variantColor]} ${
        styles[variantPadding]
      } ${responsivity && styles.responsivity}`}
    >
      {children}
    </button>
  )
}
