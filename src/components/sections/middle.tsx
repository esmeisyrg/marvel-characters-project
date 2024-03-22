import styles from '../../styles/sections/middle.module.css'
import Subtext from '../sub-text'
import HeroIcon from '../../assets/iconhero.svg'
import Cards from '../cards'
import Img from '../../assets/images/marvelpic.jpg'

export default function Middle() {
  return (
    <section className={styles['middle-container']}>
      <Subtext icon={HeroIcon} text="Characters" />
      <Cards image={Img} text='Hi' />

    </section>
  )
}
