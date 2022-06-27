import { FC } from 'react'
import { Link } from 'react-router-dom'

import Avatar from '#components/Avatar'
import { LogoLarge } from '#components/Logo'

import styles from './index.module.scss'

const Header: FC = () => {
  return (
    <header className="content-wrapper">
      <nav className={styles.navigation_bar}>
        <li className={styles.navigation_item}>
          <Link to="/learn">Learn</Link>
        </li>
        <li className={styles.navigation_item}>
          <Link to="/train">Train</Link>
        </li>
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
      </nav>
    </header>
  )
}

export default Header
