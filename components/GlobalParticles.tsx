'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CosmicParticles = () => {
  const pointsRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(5000)
    const colors = new Float32Array(5000)
    
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
      
      const colorChoice = Math.random()
      if (colorChoice < 0.3) {
      } else if (colorChoice < 0.6) {
      } else if (colorChoice < 0.8) {
      } else {
      }
    }
    
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime
      pointsRef.current.rotation.y = time * 0.01
      pointsRef.current.rotation.x = time * 0.005
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={5000}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={5000}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

const GlobalParticles = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <CosmicParticles />
      </Canvas>
    </div>
  )
}

export default GlobalParticles
