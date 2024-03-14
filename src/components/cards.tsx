import styles from '../styles/cards.module.css'

type CardProps = {
    image: string
}

export default function Cards({image}: CardProps) {
  return (
    <article>
        <img src={image} alt="Comics Image"/>
    </article>

  )
}
