import { gql, useQuery } from '@apollo/client'

import Time from './Time'
import Menu from './Menu'
import StyledCafeteria from './style'

interface Menus {
  date: String
  type: Boolean
  name: String
  breakfast?: String
  lunch?: String
  dinner?: String
}

interface MenuData {
  cafeteria: Menus
}

const GET_MENU = gql`
  query getMenu($name: String!, $date: String!) {
    cafeteria(name: $name, date: $date) {
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
  const { loading, error, data } = useQuery<MenuData>(GET_MENU, {
    variables: { name: '본관', date: '2021-03-18' },
  })

  if (loading || error) return null

  const menuDetail = [
    { 아침: data?.cafeteria.breakfast },
    { 점심: data?.cafeteria.lunch },
    { 저녁: data?.cafeteria.dinner },
  ]

  return (
    <StyledCafeteria>
      {menuDetail.map(menu => (
        <>
          {Object.values(menu).toString().length !== 0 && (
            <>
              <Time timezone={Object.keys(menu).toString()} />
              <Menu menu={Object.values(menu).toString()} />
            </>
          )}
        </>
      ))}
    </StyledCafeteria>
  )
}

export default Cafeteria
