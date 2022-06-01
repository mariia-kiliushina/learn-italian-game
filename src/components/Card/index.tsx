import { FC } from 'react'

type Props = {
  itWord: string
}

const Card: FC<Props> = ({ itWord }) => {
  return (
    <div>
      <p>{itWord}</p>
    </div>
  )
}

export default Card
