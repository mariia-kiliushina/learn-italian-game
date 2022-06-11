import { FC, ReactNode } from 'react'

import styles from './index.module.scss'

type Props = {
  children: ReactNode
  onClick: (event: any) => void
  className?: string
}

const ButtonPrimary: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${className} ${styles.buttonPrimary}`}>
      {children}
    </button>
  )
}

export default ButtonPrimary
