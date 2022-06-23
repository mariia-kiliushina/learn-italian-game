import { FC } from 'react'
import { Link } from 'react-router-dom'

import Avatar from '#components/Avatar'
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
            <Link to="/profile">Profile</Link>
          </li>
          <Avatar />
          <button onClick={() => localStorage.clear()}>Clear local storage</button>
        </ul>
      </nav>
    </header>
  )
}

export default Header
