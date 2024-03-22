import styles from '../styles/cards.module.css'

type CardProps = {
    image: string
    text: string
}

export default function Cards({image, text}: CardProps) {
  return (
    <>
    <article className={styles['cards-container']}>
      <div className={styles['image-container']}>
        <img className={styles.image} src={image} alt="Comics Image"/>
        
      </div>
      <p className={styles.text}>{text}</p>

    </article>
    
    </>
  

  )
}
