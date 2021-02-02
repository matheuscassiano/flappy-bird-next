import { AppProps } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'

const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  width: 100%;
  padding: 1em;
  margin: .25em 0;
  border-radius: 1em;
`

const Button = styled.button`
  width: 100%;
  padding: 1em;
  margin: 1em 0;
  border-radius: 1em;
`

const Home: React.FC<AppProps> = () => {
  return (
    <Container>
      <form>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Senha" />
        <Button>Login</Button>
      </form>
    </Container>
  )
}

export default Home
