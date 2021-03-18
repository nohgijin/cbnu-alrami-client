import { gql, useQuery } from '@apollo/client'

import Time from './Time'
import Menu from './Menu'
import StyledCafeteria from './style'

interface MenuProps {
  date: Date
  type: Boolean
  name: String
  breakfast: String
  lunch: String
  dinner: String
}

const GET_MENU = gql`
  query {
    cafeteria(name: "본관", date: "2021-03-17T15:00:00.000Z") {
      date
      type
      name
      breakfast
      lunch
      dinner
    }
  }
`

function Cafeteria() {
  const { loading, error, data } = useQuery<MenuProps>(GET_MENU)
  return (
    <StyledCafeteria>
      <Time timezone="아침" />
      <Menu menu="밥이다" />
      <Time timezone="점심" />
      <Menu menu="밥이다" />
      <Time timezone="저녁" />
      <Menu menu="밥이다" />
    </StyledCafeteria>
  )
}

export default Cafeteria
