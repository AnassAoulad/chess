import './Area.css'

interface Props {
  image?: string
  number: number
}

export default function Area({ number, image }: Props) {
  if (number % 2 === 0) {
    return (
      <div className="area black-area">
        <img src={image} />
      </div>
    )
  } else {
    return <div className="area white-area"></div>
  }
}
