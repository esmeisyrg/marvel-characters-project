import styles from '../styles/cards.module.css'

type Comic = {
    id: number;
    title: string;
    pageCount: number;
    thumbnail: {
      path: string;
      extension: string;
    };
};
  

type CardProps = {
  comics :  Comic[]
}

export default function CardComics({comics}: CardProps) {
  return (
    <>
    {comics.map (comic => (
    <article key={comic.id} className={styles['cards-container']}>
      <div className={styles['image-container']}>
        <img className={styles.image} src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title}/>
        
      </div>
      <p className={styles.text}>{comic.title}</p>

    </article>
    ))}
    
    </>
  

  )
}
