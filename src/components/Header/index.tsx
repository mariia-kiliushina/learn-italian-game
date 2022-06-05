import { FC } from 'react'

import styles from './index.module.scss'

const Header: FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className={styles.navigation_item}>Memo-cards</li>
          <li className={styles.navigation_item}>Swiper</li>
          <li className={styles.navigation_item}>About</li>
          <li className={styles.navigation_item}>Support</li>
        </ul>
      </nav>
      <h1>Learn Italian playing</h1>
    </header>
  )
}

export default Header
