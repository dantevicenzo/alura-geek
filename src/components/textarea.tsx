import React, { InputHTMLAttributes, forwardRef } from 'react'
import styles from './textarea.module.css'

interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  function Textarea({ id, placeholder, ...props }, ref) {
    return (
      <div className={styles.customInputWrapper}>
        <textarea id={id} placeholder={placeholder} {...props} ref={ref} />
        <label htmlFor={id}>{placeholder}</label>
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'

export default Textarea
