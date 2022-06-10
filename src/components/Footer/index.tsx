import { FC } from 'react'

// import Icon from '#components/Icon'
import { LogoSmall } from '#components/Logo'

import facebookSvg from '../../../public/images/facebook-256.svg'
import instagramSvg from '../../../public/images/instagram-250.svg'
import telegramSvg from '../../../public/images/telegram-250.svg'
import styles from './index.module.scss'

// const myIco = require('../../../public/images/facebook-256.svg') as string

const Footer: FC = () => {
  return (
    <footer className="flex-row-center">
      <div className={`content-wrapper flex-row-center ${styles.footer_content}`}>
        <LogoSmall />

        <a href="mailto:mariia.kiliushina@gmail.com">
          Write me if you've noticed some bugs / have a proposal/ want to thanks
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <img src={instagramSvg} height="50px" />
        </a>
        <a href="https://web.telegram.org/z/" target="blank">
          <img src={telegramSvg} height="50px" />
        </a>
        <a href="https://www.facebook.com/" target="blank">
          <img src={facebookSvg} height="50px" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
