import { useReactiveVar } from '@apollo/client'

import StyledName from './style'
import { cafeteriaNameVar } from '@src/apollo/cache'

function Name({ name }: { name: string }) {
  const cafeteriaName = useReactiveVar(cafeteriaNameVar)
  const active = cafeteriaName === name
  const handleName = () => {
    cafeteriaNameVar(name)
  }

  return (
    <StyledName onClick={handleName} className={active ? 'active' : ''}>
      {name}
    </StyledName>
  )
}

export default Name
