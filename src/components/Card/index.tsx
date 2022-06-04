import { FC } from 'react'

type Props = {
  itWord: string
}

const Card: FC<Props> = ({ itWord }) => {
  return (
    <div className="cardItem">
      <p>{itWord}</p>
    </div>
  )
}

export default Card
