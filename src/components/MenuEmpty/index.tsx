import StyledMenuEmpty from './style'

function MenuEmpty() {
  return (
    <StyledMenuEmpty>
      <img src="/img/uang_eat.png" alt="메뉴 없음"></img>
      <div className="info">오늘은 메뉴가 없어요</div>
    </StyledMenuEmpty>
  )
}

export default MenuEmpty
