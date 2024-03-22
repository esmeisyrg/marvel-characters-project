import styles from '../../styles/sections/top.module.css'
import Flash from '../../assets/rayo.svg'
import SearchLabel from '../ui/search-label'

export default function top() {
  return (
        <article className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.title}>MARVEL</h1>
                <p className={styles.text}>Dive into the amazing Marvel Universe</p>
                <SearchLabel/>

            </div>
            
            <div>
                <img src={Flash} alt='Flash'></img>
            </div>
        </article>

        


  )
}
