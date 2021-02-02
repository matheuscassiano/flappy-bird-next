import { AppProps } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'

const Text = styled.h1`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
`
const Home: React.FC<AppProps> = () => {
  return <Text>My Typescript Page</Text>
}

export default Home
