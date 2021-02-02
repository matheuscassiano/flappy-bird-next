import { AppProps } from 'next/dist/next-server/lib/router/router'
import serviceLogin from '../services/login'
import { Button, Container, Input } from '../styles'

const Home: React.FC<AppProps> = () => {
  return (
    <Container>
      <form onSubmit={login}>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Senha" />
        <Button>Login</Button>
      </form>
    </Container>
  )
}

function login(e) {
  e.preventDefault()
  serviceLogin(e.currentTarget[0].value, e.currentTarget[1].value)
}

export default Home
