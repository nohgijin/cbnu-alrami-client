import { ApolloClient, InMemoryCache } from '@apollo/client'
import { date } from './field'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          date,
        },
      },
    },
  }),
})
