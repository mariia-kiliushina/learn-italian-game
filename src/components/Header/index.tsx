import { FC } from 'react'
import { Link } from 'react-router-dom'

import { LogoLarge } from '#components/Logo'

import styles from './index.module.scss'

const Header: FC = () => {
  return (
    <header className="content-wrapper flex-column-center">
      <nav>
        <ul className={styles.navigation_bar}>
          <li className={styles.navigation_item}>
            <Link to="/learn">Learn</Link>
          </li>
          <li className={styles.navigation_item}>
            <Link to="/train">Train</Link>
          </li>
          {/* // (word-translation 4opt, sprint with two opt and timer, crossword// */}
          <Link to="/">
            <LogoLarge />
          </Link>
          <li className={styles.navigation_item}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.navigation_item}>
            <Link to="/support">Support</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
