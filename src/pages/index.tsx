import { useRouter } from 'next/router'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import serviceLogin from '../services/login'
import { Button, Container, Input } from '../styles'

const Home: React.FC<AppProps> = () => {
  const router = useRouter()
  return (
    <Container>
      <form onSubmit={(e) => login(e, router)}>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Senha" />
        <Button>Login</Button>
      </form>
    </Container>
  )
}

async function login(e, router) {
  e.preventDefault()
  const email = e.currentTarget[0].value;
  const pass = e.currentTarget[1].value;

  const loginResponse = await serviceLogin(email, pass)
  console.log(loginResponse)
  localStorage.setItem('token', loginResponse.access_token || null)
  localStorage.setItem('email', email || null)
  if (email && pass && loginResponse.access_token) {
    setTimeout(() => { router.push('/game') })
  }
}

export default Home
