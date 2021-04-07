import { useReactiveVar } from '@apollo/client'

import StyledCalendar from './style'
import { yearMonthFormatDate } from '@src/utils/day'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { dateVar } from '@src/apollo/cache'
import { calendar, Week, getDayClassName } from '@src/utils/calendar'
import { Days } from '@src/constants'
import { plus, minus } from '@src/hooks/useDay'

function Calendar() {
  const date = useReactiveVar(dateVar)
  const fullMonth: Week[] = calendar(date)
  const DAYS = [Days.Sunday, Days.Monday, Days.Thuesday, Days.Wednesday, Days.Thursday, Days.Friday, Days.Saturday]

  return (
    <StyledCalendar>
      <div className="selector">
        <IoIosArrowBack className="icon" onClick={() => minus('month')} />
        {yearMonthFormatDate(date)}
        <IoIosArrowForward className="icon" onClick={() => plus('month')} />
      </div>
      <table className="calendar">
        <thead>
          <tr className="weekdays">
            {DAYS.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fullMonth.map(week => (
            <tr key={week.numOfWeek} className="days">
              {week.days.map(day => (
                <td
                  key={`${day.month}-${day.date}`}
                  className={getDayClassName(date,day.year, day.month, day.date, day.day)}>
                  {day.date}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledCalendar>
  )
}

export default Calendar
