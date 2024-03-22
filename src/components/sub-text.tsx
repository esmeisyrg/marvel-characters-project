import styles from '../styles/ui/subtext.module.css'

type SubTextProps = {
    icon?: string 
    text: string
}

export default function SubText({text, icon} :  SubTextProps) {
  return (
    <article className={styles['subtext-container']}>
        <img className={styles.icon}  src={icon} alt="Icon" />
        <h4 className={styles.text}>{text}</h4>
    </article>
  )
}
