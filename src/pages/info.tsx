import styles from '../styles/pages/info.module.css'
import { IoArrowBackCircle } from "react-icons/io5";
import Image from '../assets/images/marvelpic.jpg'
import { Link } from 'react-router-dom';

export default function Info() {
  
  return (
    <section className={styles.container}>
      <div className={styles['info-container']}>
        <article className={styles['header-icon']}>
          <div className={styles.icon}>
          <Link to="/home">

            <IoArrowBackCircle />
          </Link>
          </div>

        </article>

        <article className={styles['middle-section']}>

          <div className={styles.left}>
              <img className={styles.image} src={Image} alt="" />

          </div>


          <div className={styles.rigth}>
            <h4 className={styles.title}>Spideram</h4>
            <p className={styles.text}>Hi there</p>
          </div>
          
        </article>

      </div>

    </section>
  )
}
