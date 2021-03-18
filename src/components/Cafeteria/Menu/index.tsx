import StyledMenu from './style'

interface MenuProps {
  menu: String
}

function Menu({ menu }: MenuProps) {
  return <StyledMenu>{menu}</StyledMenu>
}

export default Menu
