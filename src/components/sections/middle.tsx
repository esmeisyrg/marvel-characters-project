import styles from '../../styles/sections/middle.module.css'
import Subtext from '../sub-text'
import HeroIcon from '../../assets/iconhero.svg'
import ComicIcon  from '../../assets/images/comics.svg'
import Cards from '../cards'
import CardComics from '../cardComics'
import { Link } from 'react-router-dom'
import ApiConnector from '../../utils/apiConnector'
import ComicsConnector from '../../utils/comicsConnector'


interface MiddleProps {
  selectedOption: 'Characters' | 'Comics'
}

const Middle: React.FC<MiddleProps> = ({ selectedOption }) => {
  const characters = ApiConnector();
  const comics = ComicsConnector();

  const iconMapping: { [key: string]: string } = {
    Characters: HeroIcon,
    Comics: ComicIcon,
  }

  return (
    <section className={styles['middle-container']}>
      <Subtext icon={iconMapping[selectedOption]} text={selectedOption} />

      <Link to="/info">
      <div className={styles['cards-container']}>
        {selectedOption === 'Characters' ? (
        <>
          <Cards characters={characters} />
        </>
        ) : (
  
          <>
          <CardComics comics={comics} />

          </>
        )}

      </div>
      </Link>
  


    </section>
  );
};

export default Middle;