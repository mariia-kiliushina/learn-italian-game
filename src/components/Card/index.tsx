import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  italianWord: string
  englishWord?: string
  imageSrc: string
}

const Card: FC<Props> = ({ italianWord, englishWord, imageSrc }) => {
  return (
    <div className={styles.cardItemWrapper}>
      <div className={styles.cardImageWrapper}>
        <img src={imageSrc} />
      </div>
      <div className={`flex-column-center ${styles.cardTextWrapper}`}>
        <div className={styles.wordToTranslate}>{italianWord}</div>
        <div className={styles.translation}>{englishWord}</div>
      </div>
    </div>
  )
}

export default Card
