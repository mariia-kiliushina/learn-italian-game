import { FC } from 'react'

import styles from './index.module.scss'

const Header: FC = () => {
  return (
    <header className="size_wrapper">
      <nav>
        <ul className={styles.navigation_bar}>
          <li className={styles.navigation_item}>Memo-cards</li>
          <li className={styles.navigation_item}>Swiper</li>
          <div className=" logo flex-column-center">
            <h1>Learn Italian</h1>
            <h3>playing</h3>
          </div>

          <li className={styles.navigation_item}>About</li>
          <li className={styles.navigation_item}>Support</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
