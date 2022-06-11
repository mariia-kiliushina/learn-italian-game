import { FC } from 'react'

import styles from './index.module.scss'

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <img src="https://cdn-icons-png.flaticon.com/512/189/189792.png" height="80px" />
    </div>
  )
}

export default Loader
