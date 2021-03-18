import { gql } from '@apollo/client'

export const GET_DATE_STATE = gql`
  query GetDate {
    date @client
  }
`
