import '../styles/globals.css'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

function createApolloClient() {
  const link  = new HttpLink({
    uri: 'http://localhost:4000/graphql'
  })

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })
}

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={createApolloClient()}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
