import styles from '../../styles/ui/button.module.css'

type ButtonProps = {
    text: string,
    link?: string
}

export default function button({text, link}: ButtonProps) {
  return (
    <a href={link}>
        <button className={styles.button}>
            <p>{text}</p>
        </button>
    </a>
  )
}
