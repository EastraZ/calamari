"use client"

import { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, Html, useGLTF, PerspectiveCamera } from "@react-three/drei"
import { motion } from "framer-motion"

function ScientistModel() {
  const meshRef = useRef<any>(null)
  const [hovered, setHovered] = useState(false)
  const { camera } = useThree()

  // Load the scientist model using useGLTF hook
  const { scene } = useGLTF("/assets/3d/rust_scientist_blue.glb")

  // Force the scientist to face the camera on mount
  useEffect(() => {
    if (meshRef.current) {
      // Rotate to face camera
      meshRef.current.rotation.y = Math.PI
    }
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation - very subtle
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.05

      // Very slight rotation for liveliness
      meshRef.current.rotation.y = Math.PI + Math.sin(state.clock.elapsedTime * 0.2) * 0.05

      // Scale effect when hovered
      const targetScale = hovered ? 1.05 : 1
      const currentScale = meshRef.current.scale.x
      const newScale = currentScale + (targetScale - currentScale) * 0.1
      meshRef.current.scale.set(newScale, newScale, newScale)
    }
  })

  return (
    <group
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[0, -0.5, 0]}
      scale={[2.8, 2.8, 2.8]}
    >
      <primitive object={scene} />

      {/* Interactive speech bubble - with slight blur */}
      {hovered && (
        <Html position={[0, 2, 0]} center>
          <motion.div
            className="bg-black/90 backdrop-blur-sm border-2 border-blue-400 rounded-2xl p-4 shadow-2xl max-w-xs relative z-50"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(4px)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(59, 130, 246, 0.5)",
            }}
          >
            <div className="text-white text-sm font-bold leading-relaxed">
              🎮 <span className="text-red-400">Ready to dominate?</span>
              <br />
              <span className="text-blue-300">Let's enhance your gameplay!</span>
              <br />
              <span className="text-green-400">🚀 Undetected since 2023!</span>
            </div>

            {/* Enhanced glowing effect */}
            <div className="absolute inset-0 rounded-2xl bg-blue-400/30 animate-pulse pointer-events-none"></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse pointer-events-none"></div>
          </motion.div>
        </Html>
      )}

      {/* Status tags with slight blur */}
      <Html position={[1.5, 1.5, 0]} center>
        <motion.div
          className="bg-black/80 backdrop-blur-sm border border-green-400 rounded-xl px-3 py-1 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="flex items-center text-green-400 text-xs font-bold">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            ONLINE
          </div>
        </motion.div>
      </Html>

      <Html position={[-1.5, 1.5, 0]} center>
        <motion.div
          className="bg-black/80 backdrop-blur-sm border border-purple-400 rounded-xl px-3 py-1 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="text-purple-400 text-xs font-bold">🚀 AI ACTIVE</div>
        </motion.div>
      </Html>

      <Html position={[0, -2, 0]} center>
        <motion.div
          className="bg-black/80 backdrop-blur-sm border border-blue-400 rounded-xl px-3 py-1 shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="flex items-center text-blue-400 text-xs font-bold">
            <span className="mr-1">v4.0.1</span> ULTRA
          </div>
        </motion.div>
      </Html>
    </group>
  )
}

export default function ScientistModelViewer() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Canvas shadows className="cursor-pointer" style={{ background: "transparent" }}>
        {/* Fixed camera position to ensure scientist is centered */}
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />

        {/* Optimized lighting for perfect visibility */}
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[0, 5, 5]}
          intensity={2.0}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-3, 3, -3]} intensity={1.0} color="#4040ff" />
        <pointLight position={[3, 3, 3]} intensity={1.0} color="#ff4040" />
        <spotLight position={[0, 5, 0]} intensity={2.0} angle={0.3} penumbra={1} />

        {/* Environment for premium lighting */}
        <Environment preset="city" />

        {/* The scientist model wrapped in Suspense */}
        <Suspense fallback={null}>
          <ScientistModel />
        </Suspense>

        {/* Controls - limited to prevent losing the scientist */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
          minAzimuthAngle={-Math.PI / 6}
          maxAzimuthAngle={Math.PI / 6}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Enhanced floating particles effect with slight blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)", // Slight blur
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  )
}
