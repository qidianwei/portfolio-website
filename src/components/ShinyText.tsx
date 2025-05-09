import '../styles/ShinyText.css'
import { ShinyTextProps } from '../types'

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}) => {
  const animationDuration = `${speed}s`

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
      data-text={text}
    >
      {text}
    </div>
  )
}

export default ShinyText