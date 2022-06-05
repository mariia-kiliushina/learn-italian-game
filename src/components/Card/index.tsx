import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  italianWord: string
  russianWord: string
  imageSrc: string
}

const Card: FC<Props> = ({ italianWord, russianWord, imageSrc }) => {
  return (
    <div className={styles.cardItemWrapper}>
      <div className={styles.cardImageWrapper}>
        <img src={imageSrc} />
      </div>
      <div className={styles.cardTextWrapper}>
        <p>{italianWord}</p>
        <p>{russianWord}</p>
      </div>
    </div>
  )
}

export default Card
