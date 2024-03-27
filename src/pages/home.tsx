import { useState } from 'react'
import styles from '../styles/pages/home.module.css'
import Middle from '../components/sections/middle'
import styles2 from '../styles/sections/top.module.css'
import Flash from '../assets/rayo.svg'
import SearchLabel from '../components/ui/search-label'
import Footer from '../components/sections/footer'


export default function Home() {
    const [selectedOption, setSelectedOption] = useState<'Characters' | 'Comics'>('Characters');
    const handleOptionChange = (option:  'Characters' | 'Comics' ) => {
        setSelectedOption(option);
    }

  return (
    <div className={styles['home-container']}>
        <div className={styles.container}>
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                <li>
                    <a className={styles.a} href="#" onClick={() =>handleOptionChange('Characters')}
                    >Characters</a>
                </li>
                <li>
                    <a className={styles.a} href="#" onClick={() => handleOptionChange('Comics')}>
                    Comics</a>
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
            
            <div>
                <img src={Flash} alt='Flash'></img>
            </div>
        </article>

        <Middle selectedOption={selectedOption}/>

        <Footer/>
        </div>

    </div>
  )
}
