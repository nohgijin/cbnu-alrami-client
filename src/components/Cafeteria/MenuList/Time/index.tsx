import StyledTime from './style'

function Time({ timezone }: { timezone: string }) {
  return <StyledTime>{timezone}</StyledTime>
}

export default Time
