import { FC } from 'react'

import Card from '../../components/Card'

const wordsList = ['uovo', 'pacticceria', 'lione']

const CardsContainer: FC = () => {
  return (
    <>
      {wordsList.map((word, key) => (
        <Card key={key} itWord={word} />
      ))}
    </>
  )
}

export default CardsContainer
