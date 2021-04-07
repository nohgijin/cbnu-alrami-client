import { dateMinus, datePlus } from '@src/utils/day'
import { dateVar } from '@src/apollo/cache'
import dayjs from 'dayjs'

function plus(type: dayjs.OpUnitType) {
  const newDate = datePlus(dateVar(), type).toDate()
  dateVar(newDate)
}

function minus(type: dayjs.OpUnitType) {
  const newDate = dateMinus(dateVar(), type).toDate()
  dateVar(newDate)
}

export { plus, minus }
