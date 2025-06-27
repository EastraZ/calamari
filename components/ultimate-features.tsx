"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Eye, Target, Cpu, Network, Lock, BarChart3 } from "lucide-react"

export default function UltimateFeatures() {
  const features = [
    {
      icon: Target,
      title: "Precision Aimbot Pro",
      description: "Next-gen precision targeting with advanced algorithms",
      badge: "99.9% Accuracy",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Eye,
      title: "Quantum ESP Vision",
      description: "See everything, everywhere, everytime",
      badge: "360° Vision",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Stealth Mode Ultra",
      description: "Invisible to all anti-cheat systems",
      badge: "100% Undetected",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Performance Boost Engine",
      description: "Maximize your FPS and minimize lag",
      badge: "+60% FPS",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "Smart Auto-Config",
      description: "Intelligent configuration system that optimizes settings",
      badge: "Auto-Optimize",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Network,
      title: "Cloud Sync Technology",
      description: "Sync settings across all devices instantly",
      badge: "Real-time Sync",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Lock,
      title: "Military-Grade Encryption",
      description: "Bank-level security for your gaming data",
      badge: "256-bit SSL",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track performance with detailed statistics",
      badge: "Pro Stats",
      color: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900/50 to-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan-400 font-medium">Professional Gaming Enhancement Suite</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Advanced Features
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the most comprehensive gaming enhancement platform ever created. Each feature is powered by
            cutting-edge technology, tested by professional esports players, and trusted by millions worldwide.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              />

              {/* Badge */}
              <motion.div
                className={`inline-flex items-center bg-gradient-to-r ${feature.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}
                whileHover={{ scale: 1.1 }}
              >
                {feature.badge}
              </motion.div>

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId={`feature-${index}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg mb-8">
            Ready to experience the future of gaming? Join thousands of satisfied customers.
          </p>
          <motion.button
            onClick={() => {
              const plansSection = document.getElementById("subscription-plans")
              if (plansSection) {
                plansSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full font-bold text-lg text-white transition-all duration-300 shadow-2xl shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
