import { useQuery, gql } from '@apollo/client'
import dayjs from 'dayjs'

import Time from './Time'
import Menu from './Menu'
import MenuEmpty from '@components/MenuEmpty'
import { GET_CAFETERIA_NAME_STATE, GET_DATE_STATE } from '@src/apollo/quries'

interface Menus {
  date: string
  type: Boolean
  name: string
  breakfast?: string
  lunch?: string
  dinner?: string
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

function MenuList() {
  const { data: dateData } = useQuery(GET_DATE_STATE)
  const { data: nameDate } = useQuery(GET_CAFETERIA_NAME_STATE)
  const date = dayjs(dateData.date)

  const { data } = useQuery<MenuData>(GET_MENU, {
    variables: { name: nameDate.cafeteriaName, date: `${date.year()}-${date.month() + 1}-${date.date()}` },
  })
  const [breakfast, lunch, dinner] = [data?.cafeteria?.breakfast, data?.cafeteria?.lunch, data?.cafeteria?.dinner]

  return (
    <>
      {!data && <MenuEmpty />}
      {breakfast && (
        <>
          <Time timezone="아침" />
          <Menu menu={breakfast} />
        </>
      )}
      {lunch && (
        <>
          <Time timezone="점심" />
          <Menu menu={lunch} />
        </>
      )}
      {dinner && (
        <>
          <Time timezone="저녁" />
          <Menu menu={dinner} />
        </>
      )}
    </>
  )
}

export default MenuList
