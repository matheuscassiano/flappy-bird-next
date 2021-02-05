import { AppProps } from 'next/dist/next-server/lib/router/router'
import { useRouter } from 'next/router'
import { Canvas } from './styles'
import routeGuard from '../../services/auth.guard'

import game from './source/game'
import { useEffect, useRef, useState } from 'react'

const Home: React.FC<AppProps> = () => {
  const [routePermission, setRoutePermission] = useState(true)
  const canvasRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const permission = routeGuard();
    setRoutePermission(permission.accept);
    game(canvasRef.current);
  }, [])
  return (routePermission ? (
    <Canvas ref={canvasRef}></Canvas>
  ) : setTimeout(() => { router.push('/') }))
}

export default Home
