import { FC } from 'react'

import styles from './index.module.scss'

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif"
        height="80px"
      />
    </div>
  )
}

export default Loader
