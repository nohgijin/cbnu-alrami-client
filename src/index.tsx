import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import Home from '@src/components/Home'
import Cafeteria from '@src/components/Cafeteria'
import { client } from '@src/apollo/client'
import '@src/assets/base/base.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/cafeteria" component={Cafeteria} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
