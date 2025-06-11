"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  Zap,
  Eye,
  Cpu,
  Cloud,
  Rocket,
  Smartphone,
  Gamepad,
  Volume2,
  RefreshCw,
  Lock,
  Radar,
  Search,
  UserCheck,
} from "lucide-react"

export default function MegaUltimateFeatures() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Features" },
    { id: "core", name: "Core Systems" },
    { id: "visual", name: "Visual Enhancements" },
    { id: "audio", name: "Audio Systems" },
    { id: "security", name: "Security Features" },
    { id: "mobile", name: "Mobile Integration" },
  ]

  const features = [
    {
      id: 1,
      title: "Kernel-Level Integration",
      description: "Operates at the deepest system level for unparalleled performance and undetectability.",
      icon: <Cpu className="h-6 w-6" />,
      category: "core",
      highlight: true,
    },
    {
      id: 2,
      title: "Sound ESP System",
      description: "Advanced audio visualization system that transforms footsteps and sounds into visual cues.",
      icon: <Volume2 className="h-6 w-6" />,
      category: "audio",
      highlight: false,
    },
    {
      id: 3,
      title: "Multi-Account Manager",
      description: "Seamlessly switch between multiple game accounts with saved configurations.",
      icon: <UserCheck className="h-6 w-6" />,
      category: "core",
      highlight: false,
    },
    {
      id: 4,
      title: "Recoil Control System",
      description: "AI-powered recoil compensation that adapts to your playstyle and weapon preferences.",
      icon: <Zap className="h-6 w-6" />,
      category: "core",
      highlight: true,
    },
    {
      id: 5,
      title: "Stream-Proof Overlay",
      description: "Invisible to streaming software and screen recording applications.",
      icon: <Eye className="h-6 w-6" />,
      category: "visual",
      highlight: false,
    },
    {
      id: 6,
      title: "Mobile Companion App",
      description: "Control and monitor your Calamari settings remotely from any mobile device.",
      icon: <Smartphone className="h-6 w-6" />,
      category: "mobile",
      highlight: false,
    },
    {
      id: 7,
      title: "Controller Aim Assist",
      description: "Enhanced precision for controller users with customizable strength and response curves.",
      icon: <Gamepad className="h-6 w-6" />,
      category: "core",
      highlight: false,
    },
    {
      id: 8,
      title: "Rage Mode",
      description: "Unleash maximum performance with one click when you need to dominate immediately.",
      icon: <Zap className="h-6 w-6" />,
      category: "core",
      highlight: true,
    },
    {
      id: 9,
      title: "Visual Customizer",
      description: "Personalize every aspect of your ESP, overlays, and UI elements.",
      icon: <Eye className="h-6 w-6" />,
      category: "visual",
      highlight: false,
    },
    {
      id: 10,
      title: "Auto-Update System",
      description: "Always stay protected with silent background updates and version control.",
      icon: <RefreshCw className="h-6 w-6" />,
      category: "security",
      highlight: false,
    },
    {
      id: 11,
      title: "Anti-Ban Protection",
      description: "Multiple layers of security to ensure your account remains safe and undetected.",
      icon: <Shield className="h-6 w-6" />,
      category: "security",
      highlight: true,
    },
    {
      id: 12,
      title: "Item ESP & Loot Radar",
      description: "Never miss valuable items with our advanced item detection system.",
      icon: <Radar className="h-6 w-6" />,
      category: "visual",
      highlight: false,
    },
    {
      id: 13,
      title: "Exploit Scanner",
      description: "Automatically detect and utilize game vulnerabilities for maximum advantage.",
      icon: <Search className="h-6 w-6" />,
      category: "core",
      highlight: false,
    },
    {
      id: 14,
      title: "Spectator Detection",
      description: "Know immediately when someone is spectating your gameplay.",
      icon: <Eye className="h-6 w-6" />,
      category: "security",
      highlight: false,
    },
    {
      id: 15,
      title: "Cloud Configuration Sync",
      description: "Your settings follow you to any device with secure cloud synchronization.",
      icon: <Cloud className="h-6 w-6" />,
      category: "core",
      highlight: false,
    },
    {
      id: 16,
      title: "Instant Injection",
      description: "Lightning-fast startup with our proprietary injection technology.",
      icon: <Rocket className="h-6 w-6" />,
      category: "core",
      highlight: true,
    },
    {
      id: 17,
      title: "Hardware ID Spoofer",
      description: "Advanced protection that masks your hardware identity from anti-cheat systems.",
      icon: <Lock className="h-6 w-6" />,
      category: "security",
      highlight: true,
    },
    {
      id: 18,
      title: "Neural Network Prediction",
      description: "AI-powered movement prediction for superhuman reaction times.",
      icon: <Cpu className="h-6 w-6" />,
      category: "core",
      highlight: true,
    },
  ]

  const filteredFeatures =
    activeCategory === "all" ? features : features.filter((feature) => feature.category === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            MEGA ULTIMATE FEATURES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most advanced gaming enhancement technologies that will revolutionize your gameplay experience.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-red-600 to-orange-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              className={`bg-gradient-to-br ${
                feature.highlight
                  ? "from-black to-red-950/30 border-red-500/30"
                  : "from-black to-gray-900/50 border-gray-700/30"
              } border rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -5,
                boxShadow: feature.highlight
                  ? "0 20px 30px -10px rgba(239, 68, 68, 0.2)"
                  : "0 20px 30px -10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.highlight ? "bg-red-500/20 text-red-400" : "bg-gray-800 text-gray-400"
                }`}
              >
                {feature.icon}
              </div>

              <h3 className={`text-xl font-bold mb-3 ${feature.highlight ? "text-red-400" : "text-white"}`}>
                {feature.title}
              </h3>

              <p className="text-gray-400 mb-4">{feature.description}</p>

              <div className="flex items-center text-sm">
                <span
                  className={`px-3 py-1 rounded-full ${
                    feature.highlight ? "bg-red-500/20 text-red-400" : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {categories.find((c) => c.id === feature.category)?.name}
                </span>

                {feature.highlight && (
                  <span className="ml-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400">Premium</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 30px -10px rgba(239, 68, 68, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Unlock All Features
          </motion.button>

          <p className="text-gray-400 mt-4">All features included in every subscription plan</p>
        </motion.div>
      </div>
    </section>
  )
}
