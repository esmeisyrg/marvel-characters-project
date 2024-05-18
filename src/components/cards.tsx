import { Link } from 'react-router-dom';
import styles from '../styles/cards.module.css'

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}


export interface CardProps {
  characters: Character[]
}

export default function Cards({ characters }: CardProps) {
  return (
    <>
      {characters.map((char) => (
        <Link key={char.id} to={`/info/${char.id}`} className={styles.link}>
          <article className={styles.container}>
            <div className={styles['image-container']}>
              <img
                className={styles.image}
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                alt={char.name}
              />
            </div>
            <p className={styles.text}>{char.name}</p>
          </article>
        </Link>
      ))}
    </>
  );
}