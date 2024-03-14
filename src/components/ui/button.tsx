type ButtonProps = {
    text: string,
    link?: string

}

export default function button({text, link}: ButtonProps) {
  return (
    <a href={link}>
        <button>
            <p>{text}</p>
        </button>
    </a>
  )
}
