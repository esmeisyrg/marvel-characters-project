import styles from '../../styles/sections/middle.module.css'
import Subtext from '../sub-text'
import HeroIcon from '../../assets/iconhero.svg'
import ComicIcon  from '../../assets/images/comics.svg'
import Cards from '../cards'
import Img from '../../assets/images/marvelpic.jpg'

interface MiddleProps {
  selectedOption: 'Characters' | 'Comics'
}

const Middle: React.FC<MiddleProps> = ({ selectedOption }) => {

  const iconMapping: { [key: string]: string } = {
    Characters: HeroIcon,
    Comics: ComicIcon,
  }

  return (
    <section className={styles['middle-container']}>
      <Subtext icon={iconMapping[selectedOption]} text={selectedOption} />
      <div className={styles['cards-container']}>
        {selectedOption === 'Characters' ? (
        <>
          <Cards image={Img} text='Comic' />
          <Cards image={Img} text='Comic' />
          <Cards image={Img} text='Comic' />
          <Cards image={Img} text='Comic' />
          <Cards image={Img} text='Comic' />
          <Cards image={Img} text='Comic' />
          <Cards image={Img} text='Comic' />
        </>
        ) : (
  
          <>
          <Cards image={Img} text='Comic' />
          <Cards image={Img} text='Comic' />
          <Cards image={Img} text='Comic' />
          </>
        )}


      </div>

    </section>
  );
};

export default Middle;