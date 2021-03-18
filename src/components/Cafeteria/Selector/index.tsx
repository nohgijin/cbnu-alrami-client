import Arrow from './Arrow'
import Date from './Date'
import StyledSelector from './style'

function Selector() {
  return (
    <StyledSelector>
      <Arrow direction="left" />
      <Date />
      <Arrow direction="right" />
    </StyledSelector>
  )
}

export default Selector
