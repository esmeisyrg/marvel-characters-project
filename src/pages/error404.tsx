import styles from '../styles/pages/error.module.css'
import Button from '../components/ui/button'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className={styles.container}>
      {/* create a span*/}
      <article className={styles['text-container']}>
        <span className={styles.text}>Oops! Not found</span>
        <span className={styles.text}>Go to the main page</span>
      </article>

      <Link to="/home">
        <Button text="Home"/>
      </Link>





    </div>
  )
}
