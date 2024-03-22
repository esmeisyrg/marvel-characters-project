import styles from '../styles/pages/home.module.css'
import Top from '../components/sections/top'
import Middle from '../components/sections/middle'

export default function home() {
  return (
    <div className={styles['home-container']}>
        <div className={styles.container}>
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                <li>
                    <a className={styles.a} href="#">Characters</a>
                </li>
                <li>
                    <a className={styles.a} href="#">Comics</a>
                </li>
                </ul>
            </nav>
        </header>

        <Top/>
        <Middle/>
        
        </div>
    
    </div>
  )
}
