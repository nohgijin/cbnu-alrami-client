import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import dayjs from 'dayjs'

import StyledArrow from './style'
import { dateVar } from '@src/apollo/cache'

function Arrow({ direction }: { direction: string }) {
  const plus = () => {
    const newDate = dayjs(dateVar()).add(1, 'day')
    dateVar(newDate.toDate())
  }

  const minus = () => {
    const newDate = dayjs(dateVar()).subtract(1, 'day')
    dateVar(newDate.toDate())
  }
  return (
    <StyledArrow>
      {direction === 'right' ? <BiChevronRight onClick={plus} /> : <BiChevronLeft onClick={minus} />}
    </StyledArrow>
  )
}

export default Arrow
