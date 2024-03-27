import styles from '../styles/cards.module.css'

type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

type CardProps = {
  characters: Character[]
}

export default function Cards({characters}: CardProps) {
  return (
    <>
    {characters.map (char => (
    <article key={char.id} className={styles['cards-container']}>
      <div className={styles['image-container']}>
        <img className={styles.image} src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name}/>
        
      </div>
      <p className={styles.text}>{char.name}</p>

    </article>
    ))}
    </>
  

  )
}
