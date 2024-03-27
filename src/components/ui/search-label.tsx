import styles from '../../styles/sections/top.module.css'

export default function SearchLabel() {
  return (    
    <div>
        <input className={styles.input} type="text" placeholder="Search">
        </input>
    </div>
     

  )
}
