import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import StyledArrow from './style'
import { plus, minus } from '@src/hooks/useDay'

function Arrow({ direction }: { direction: string }) {
  return (
    <StyledArrow>
      {direction === 'right' ? (
        <BiChevronRight onClick={() => plus('day')} />
      ) : (
        <BiChevronLeft onClick={() => minus('day')} />
      )}
    </StyledArrow>
  )
}

export default Arrow
