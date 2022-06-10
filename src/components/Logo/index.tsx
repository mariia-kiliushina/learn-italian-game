import { FC } from 'react'

import flagImg from '../../../public/images/italy-100.png'
import styles from './index.module.scss'

const LogoSmall: FC = () => {
  return (
    <div className="logo gridLogoContainer">
      <h3>Learn Italian</h3>
      <p>playing</p>
      <a href="">
        <img src={flagImg} height="30px" />
      </a>
    </div>
  )
}

const LogoMedium: FC = () => {
  return (
    <div className="logo flex-column-center">
      <h2>Learn Italian</h2>
      <h3>playing</h3>
      <a href="">
        <img src={flagImg} height="60px" />
      </a>
    </div>
  )
}

const LogoLarge: FC = () => {
  return (
    <div className={`logo ${styles.gridLogoContainer}`}>
      <h1 className={styles.heading1}>Learn Italian</h1>
      <h3 className={styles.heading2}>playing</h3>
      <a href="" className={styles.logoImage}>
        <img src={flagImg} height="100%" />
      </a>
    </div>
  )
}

export { LogoSmall, LogoMedium, LogoLarge }
