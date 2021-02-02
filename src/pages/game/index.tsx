import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Canvas } from './styles'

import game from './source/game'
import { useEffect, useRef, CanvasHTMLAttributes } from 'react'

const Home: React.FC<AppProps> = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    console.log(canvasRef)
    game(canvasRef.current)
  }, [])
  return (
    <Canvas ref={canvasRef}></Canvas>
  )
}

export default Home
