import { FC, ReactNode } from 'react'

import styles from './index.module.scss'

type Props = {
  onClick: () => void
  children: ReactNode
}

const ButtonPrimary: FC<Props> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.cardItemWrapper}>
      {children}
    </button>
  )
}

export default ButtonPrimary
