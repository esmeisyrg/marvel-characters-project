import Image from '../assets/images/marvelpic.jpg';
import styles from '../styles/pages/login-page.module.css'
import Button from '../components/ui/button'
import Marvel from '../assets/images/marvel.svg'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className={styles.container}>
      <article className={styles.left}>
        <img src={Image} alt="Comics Image"/>

      </article>

      <article className={styles.right}>
        <img className={styles.marvel} src={Marvel} alt="Comics Image"/>
        <p className={styles.text}>Join the amazing universe of its characters.</p>
        
          {/*PUT ME a link to login*/}
        <Link to="/home">
          <Button text="Login"/>
        </Link>
        
      </article>
  
    
    </div>
  )
}
