import { FC } from 'react'

import flagImg from '../../../public/images/italy-100.png'
import styles from './index.module.scss'

const LogoSmall: FC = () => {
  return (
    <a href="" className="logo gridLogoContainer">
      <h3>Learn Italian</h3>
      <p>playing</p>
      <img src={flagImg} height="30px" />
    </a>
  )
}

const LogoMedium: FC = () => {
  return (
    <a href="" className="logo flex-column-center">
      <h2>Learn Italian</h2>
      <h3>playing</h3>
      <img src={flagImg} height="60px" />
    </a>
  )
}

const LogoLarge: FC = () => {
  return (
    <a href="" className={`logo ${styles.gridLogoContainer}`}>
      <h1 className={styles.heading1}>Learn Italian</h1>
      <h3 className={styles.heading2}>playing</h3>
      <img className={styles.logoImage} src={flagImg} height="100%" />
    </a>
  )
}

export { LogoSmall, LogoMedium, LogoLarge }
