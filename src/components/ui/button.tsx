import styles from '../../styles/ui/button.module.css'

type ButtonProps = {
    text: string,
    link?: string
}

export default function utton({text, link}: ButtonProps) {
  const handleClick = () => {
    if (link) {
      window.location.href = link
    }
  }

  return (
    <button className={styles.button} onClick={handleClick} >
          <p>{text}</p>
    </button>

  )
}
