import { makeVar } from '@apollo/client'

export const dateVar = makeVar<Date>(new Date())
