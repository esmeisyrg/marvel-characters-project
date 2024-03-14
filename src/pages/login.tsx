import Image from '../assets/images/marvelpic.jpg';
import styles from '../styles/pages/login-page.module.css'
import Button from '../components/ui/button'

export default function login() {
  return (
    <div className={styles.container}>
      <img src={Image} alt="Comics Image"/>
      <p>Join the amazing universe of its characters.</p>
      <Button text="Login" link="#"/>
    </div>
  )
}
