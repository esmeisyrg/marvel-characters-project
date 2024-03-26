import { useState } from 'react'
import styles from '../styles/pages/home.module.css'
import Top from '../components/sections/top'
import Middle from '../components/sections/middle'

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

        <Top/>
        <Middle selectedOption={selectedOption}/>
        
        </div>
    </div>
  )
}
