import styles from '../styles/pages/info.module.css'
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, Params, useParams } from 'react-router-dom';
import { Character } from '../components/cards';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Info() {
  const { id } = useParams<Params>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}`, {
        params: {
          ts: 1,
          apikey: '5573ad9b2ed436d23a8f1e70ed063b02',
          hash: 'b28d6eb01e6ac4578c500bf402b5dc73',
        }
      })
        .then(response => {
          setCharacter(response.data.data.results[0]);
        })
        .catch(error => console.error('Fetch error:', error));
    }
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.container}>
      <div className={styles['info-container']}>
        <article className={styles['header-icon']}>
          <div className={styles.icon}>
            <Link to="/home">
              <IoArrowBackCircle />
            </Link>
          </div>
        </article>

        <article className={styles['middle-section']}>
          <div className={styles.left}>
            <img className={styles.image} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          </div>
          <div className={styles.right}>
            <h4 className={styles.title}>{character.name}</h4>
            <p className={styles.text}>{character.description || "No description available."}</p>
          </div>
        </article>
      </div>
    </section>
  );
} 