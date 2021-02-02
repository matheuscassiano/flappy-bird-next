import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Canvas } from './styles'

import game from './source/game'
import { useEffect, useRef } from 'react'

const Home: React.FC<AppProps> = () => {
  const canvasRef = useRef(null)
  useEffect(() => { game(canvasRef.current) }, [])
  return <Canvas ref={canvasRef}></Canvas>
}

export default Home
