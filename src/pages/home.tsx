import { useState, useEffect } from 'react';
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
    const [searchTerm, setSearchTerm] = useState(selectedOption === 'Characters' ? 'Spider-Man' : 'Avengers'); // Establecer término de búsqueda por defecto
    const [showTemporarySearchTerm, setShowTemporarySearchTerm] = useState(false);

    const handleOptionChange = (option: 'Characters' | 'Comics') => {
        setSelectedOption(option);
    };

 
    useEffect(() => {
        // Updates the search input
        setSearchTerm(selectedOption === 'Characters' ? 'Spider-Man' : 'Avengers');
        setShowTemporarySearchTerm(true);

        const timer = setTimeout(() => {
            setShowTemporarySearchTerm(false);
        }, 2000);

        return () => clearTimeout(timer); 
    }, [selectedOption]);

    const characters = ApiConnector(searchTerm);
    const comics = ComicsConnector(searchTerm);

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
                        <SearchLabel searchTerm={showTemporarySearchTerm ? searchTerm : ''} setSearchTerm={setSearchTerm} />
                    </div>
                    
                    <div className={styles2.right}>
                        <img className={styles2.flash} src={Flash} alt='Flash'></img>
                    </div>
                </article>

                <section className={styles3['middle-container']}>
                    <Subtext icon={iconMapping[selectedOption]} text={selectedOption} />

                        <div className={styles3['cards-container']}>
                            {selectedOption === 'Characters' ? (
                                   <Cards characters={characters} />
                                   ) : (
                                    <CardComics comics={comics} />
                            )}
                        </div>
                </section>

                <Footer/>
            </div>
        </div>
    );
}
