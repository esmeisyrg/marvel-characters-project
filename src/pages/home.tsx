import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/home.module.css';
import styles2 from '../styles/sections/top.module.css';
import styles3 from '../styles/sections/middle.module.css';
import Flash from '../assets/rayo.svg';
import HeroIcon from '../assets/iconhero.svg';
import ComicIcon from '../assets/images/comics.svg';
import SearchLabel from '../components/ui/search-label';
import Footer from '../components/sections/footer';
import Subtext from '../components/sub-text';
import Cards from '../components/cards';
import CardComics from '../components/cardComics';
import ApiConnector from '../utils/apiConnector';
import ComicsConnector from '../utils/comicsConnector';

export default function Home() {
    const [selectedOption, setSelectedOption] = useState<'Characters' | 'Comics'>('Characters');

    const handleOptionChange = (option: 'Characters' | 'Comics') => {
        setSelectedOption(option);
    };

    const characters = ApiConnector();
    const comics = ComicsConnector();

    const iconMapping: { [key: string]: string } = {
        Characters: HeroIcon,
        Comics: ComicIcon,
    };

    return (
        <div className={styles['home-container']}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                                <a className={styles.a} href="#" onClick={() => handleOptionChange('Characters')}>
                                    Characters
                                </a>
                            </li>
                            <li>
                                <a className={styles.a} href="#" onClick={() => handleOptionChange('Comics')}>
                                    Comics
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <article className={styles2.container}>
                    <div className={styles2.left}>
                        <h1 className={styles2.title}>MARVEL</h1>
                        <p className={styles2.text}>Dive into the amazing Marvel Universe</p>
                        <SearchLabel/>
                    </div>
                    
                    <div className={styles2.right}>
                        <img className={styles2.flash} src={Flash} alt='Flash'></img>
                    </div>
                </article>

                <section className={styles3['middle-container']}>
                    <Subtext icon={iconMapping[selectedOption]} text={selectedOption} />

                    <Link to="/info">
                        <div className={styles3['cards-container']}>
                            {selectedOption === 'Characters' ? (
                                <Cards characters={characters} />
                            ) : (
                                <CardComics comics={comics} />
                            )}
                        </div>
                    </Link>
                </section>

                <Footer/>
            </div>
        </div>
    );
}
