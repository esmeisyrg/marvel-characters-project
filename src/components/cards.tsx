import styles from '../styles/cards.module.css'

type CardProps = {
    image: string
    text: string
}

export default function Cards({image, text}: CardProps) {
  return (
    <article className={styles['cards-container']}>
        <img className={styles.image} src={image} alt="Comics Image"/>
        <p className={styles.text}>{text}</p>
    </article>

  )
}
