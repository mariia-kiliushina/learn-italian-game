import { FC, ReactNode } from 'react'

import styles from './index.module.scss'

type Props = {
  children: ReactNode
  onClick: (event: any) => void
  className?: string
  disabled: boolean
}

const ButtonPrimary: FC<Props> = ({ children, onClick, className, disabled }) => {
  return (
    <>
      {!disabled && (
        <button onClick={onClick} className={`${className} ${styles.buttonPrimary}`}>
          {children}
        </button>
      )}
      {disabled && (
        <button disabled onClick={onClick} className={`${className} ${styles.buttonPrimary}`}>
          {children}
        </button>
      )}
    </>
  )
}

export default ButtonPrimary
