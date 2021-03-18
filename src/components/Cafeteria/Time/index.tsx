import StyledTime from './style'

interface TimeProps {
  timezone: String
}

function Time({ timezone }: TimeProps) {
  return <StyledTime>{timezone}</StyledTime>
}

export default Time
