import { useReactiveVar } from '@apollo/client'

import dayjs from 'dayjs'
import StyledDate from './style'
import { dateVar } from '@src/apollo/cache'

function Date() {
  const date = useReactiveVar(dateVar)
  return <StyledDate>{dayjs(date).format('YYYY년 MM월 DD일 (ddd)')}</StyledDate>
}

export default Date
