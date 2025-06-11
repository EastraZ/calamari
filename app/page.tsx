"use client"

import { useState, useEffect, useRef } from "react"
import VideoBackground from "@/components/video-background"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"
import ScientistModelViewer from "@/components/scientist-model"
import FloatingStats from "@/components/floating-stats"
import { motion } from "framer-motion"
import { Play, Rocket, Code, Sparkles, ChevronDown } from "lucide-react"
import { useScroll, useTransform, AnimatePresence } from "framer-motion"
import Footer from "@/components/footer"
import UltimateFeatures from "@/components/ultimate-features"
import MegaUltimateFeatures from "@/components/mega-ultimate-features"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Refs for scroll animations
  const featuresRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const discordRef = useRef<HTMLElement>(null)

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Enhanced testimonials
  const testimonials = [
    {
      text: "Calamari completely revolutionized my gaming experience. The AI aimbot is incredibly accurate and feels natural!",
      author: "ProGamer_2024",
      game: "Rust",
      rating: 5,
    },
    {
      text: "Best investment I've made for Fortnite. The ESP and performance boost are game-changing!",
      author: "BuildMaster",
      game: "Fortnite",
      rating: 5,
    },
    {
      text: "Undetected for 8 months now. Amazing support team and constant updates!",
      author: "ApexLegend",
      game: "Apex Legends",
      rating: 5,
    },
    {
      text: "The neural network AI actually learns my playstyle. It's like having a personal gaming coach!",
      author: "EliteSniper",
      game: "Valorant",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleViewProduct = () => {
    const plansSection = document.getElementById("subscription-plans")
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a0a0a] to-[#0a0f1a] text-white overflow-hidden relative">
        {/* Video Background for top section */}
        <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
          <VideoBackground videoId="Zyb4ocZlJyQ" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#2d0808]/70 to-[#0f0a0a] z-10"
            style={{ y: backgroundY }}
          />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <AnimatePresence>
          {isLoaded && (
            <motion.section
              className="container mx-auto px-4 pt-16 pb-0 md:pt-24 md:pb-0 flex flex-col lg:flex-row items-center relative z-20 min-h-[90vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ y: heroY }}
            >
              {/* Left side - Text content */}
              <motion.div
                className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Animated badge */}
                <motion.div
                  className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="h-4 w-4 text-red-400 mr-2" />
                  <span className="text-sm font-medium text-red-300">Now with AI-Enhanced Features</span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    Game
                  </span>
                  <br />
                  <motion.span
                    className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    Evolution
                  </motion.span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent">
                    Starts Here
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Experience the future of gaming with <span className="text-red-400 font-semibold">Calamari's</span>{" "}
                  cutting-edge enhancement tools. Dominate every match with precision, style, and complete safety.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <motion.button
                    onClick={handleViewProduct}
                    className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center">
                      <Rocket className="mr-2 h-5 w-5" />
                      Start Dominating
                    </span>
                  </motion.button>

                  <motion.button
                    onClick={() => setShowVideo(true)}
                    className="group px-8 py-4 border-2 border-white/20 rounded-full font-bold text-lg hover:border-white/40 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Demo
                    </span>
                  </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <FloatingStats />
                </motion.div>
              </motion.div>

              {/* Right side - 3D Scientist Model - CENTERED PROPERLY */}
              <motion.div
                className="lg:w-1/2 h-[500px] flex items-center justify-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Enhanced glowing background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* 3D Model Container - PROPERLY CENTERED */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="w-[400px] h-[400px] rounded-3xl overflow-hidden border-2 border-white/20 bg-black/50 shadow-2xl">
                    <ScientistModelViewer />
                  </div>
                </div>

                {/* Enhanced Floating UI Elements - WITH SLIGHT BLUR */}
                <motion.div
                  className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border-2 border-green-400 rounded-xl px-4 py-3 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    backdropFilter: "blur(4px)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(34, 197, 94, 0.6)",
                  }}
                >
                  <div className="flex items-center text-green-400">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg shadow-green-400/50" />
                    <span className="text-sm font-bold">ONLINE</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border-2 border-blue-400 rounded-xl px-4 py-3 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    backdropFilter: "blur(4px)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(59, 130, 246, 0.6)",
                  }}
                >
                  <div className="text-blue-400 text-sm font-bold flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    v4.0.1 ULTRA
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border-2 border-purple-400 rounded-xl px-4 py-3 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.9 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    backdropFilter: "blur(4px)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(147, 51, 234, 0.6)",
                  }}
                >
                  <div className="text-purple-400 text-sm font-bold">🚀 AI ACTIVE</div>
                </motion.div>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Scroll Indicator - MOVED UP TO REMOVE GAP */}
        <motion.div
          className="flex justify-center mt-4 relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={() => {
            const featuresSection = document.getElementById("features")
            if (featuresSection) {
              featuresSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          <motion.div className="flex flex-col items-center cursor-pointer" whileHover={{ scale: 1.1 }}>
            <motion.span
              className="text-gray-400 text-sm mb-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              Scroll to explore
            </motion.span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronDown className="h-6 w-6 text-red-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* MEGA ULTIMATE Features Section - NEW! */}
        <motion.section
          className="relative z-20 mt-8"
          id="features"
          ref={featuresRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <MegaUltimateFeatures />
        </motion.section>

        {/* ULTIMATE Features Section */}
        <motion.section
          className="relative z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <UltimateFeatures />
        </motion.section>

        {/* Enhanced Testimonials Section */}
        <motion.section
          className="container mx-auto px-4 py-20 relative z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Trusted by Elite Gamers Worldwide
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-xl">
              Join over 1 million players who've elevated their game with Calamari
            </p>
          </motion.div>

          <motion.div className="max-w-5xl mx-auto" variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="bg-black border border-white/20 rounded-3xl p-10 text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl" />

                <motion.p
                  className="text-2xl md:text-3xl text-gray-200 mb-8 italic relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>

                {/* Star rating */}
                <motion.div
                  className="flex justify-center mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-400 text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex items-center justify-center space-x-4 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-red-400 font-bold text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full" />
                  <div className="text-gray-400 font-medium">{testimonials[currentTestimonial].game}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-red-500 scale-125 shadow-lg shadow-red-500/50"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Enhanced Pricing Section with SellAuth Embeds */}
        <motion.section
          className="container mx-auto px-4 py-20 bg-gradient-to-br from-[#0f0a0a]/50 to-transparent relative z-20"
          id="subscription-plans"
          ref={pricingRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Choose Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Power Level
              </span>
            </motion.h2>
            <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto" variants={itemVariants}>
              Every plan includes full access to all features, 24/7 support, and our undetected guarantee. Start your
              journey to gaming supremacy today.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
          >
            {/* 1 Day Plan */}
            <motion.div
              className="relative bg-black border border-gray-700 rounded-2xl p-6 h-full flex flex-col justify-between group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255, 0, 0, 0.3)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <div>
                <div className="text-center mb-6">
                  <motion.h3 className="text-2xl font-bold mb-2 text-white" whileHover={{ color: "#ff3333" }}>
                    Trial Run
                  </motion.h3>
                  <div className="text-4xl font-bold text-white mb-2">$6.99</div>
                  <p className="text-gray-400">1 Day Access</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    All premium features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    24/7 support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Instant activation
                  </li>
                </ul>
              </div>

              {/* Buy Button */}
              <motion.a
                href="https://calamari.sellauth.com/product/1day"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 py-3 rounded-xl text-center text-white font-medium transition-all duration-300 block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
            </motion.div>

            {/* 7 Days Plan - Most Popular */}
            <motion.div
              className="relative bg-black border-2 border-red-500 rounded-2xl p-6 h-full flex flex-col justify-between group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255, 0, 0, 0.5)",
              }}
            >
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                MOST POPULAR
              </motion.div>
              <div>
                <div className="text-center mb-6 mt-4">
                  <motion.h3
                    className="text-2xl font-bold mb-2 text-white"
                    animate={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Power User
                  </motion.h3>
                  <div className="text-4xl font-bold text-white mb-2">$24.99</div>
                  <p className="text-red-200">7 Days Access</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-red-100">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    All premium features
                  </li>
                  <li className="flex items-center text-red-100">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Priority support
                  </li>
                  <li className="flex items-center text-red-100">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Pro player configs
                  </li>
                  <li className="flex items-center text-red-100">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Best value
                  </li>
                </ul>
              </div>

              {/* Buy Button */}
              <motion.a
                href="https://calamari.sellauth.com/product/7day"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 py-3 rounded-xl text-center text-white font-medium transition-all duration-300 block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Choose Plan
              </motion.a>
            </motion.div>

            {/* 30 Days Plan */}
            <motion.div
              className="relative bg-black border border-gray-700 rounded-2xl p-6 h-full flex flex-col justify-between group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255, 0, 0, 0.3)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <div>
                <div className="text-center mb-6">
                  <motion.h3 className="text-2xl font-bold mb-2 text-white" whileHover={{ color: "#ff3333" }}>
                    Elite Gamer
                  </motion.h3>
                  <div className="text-4xl font-bold text-white mb-2">$79.99</div>
                  <p className="text-gray-400">30 Days Access</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    All premium features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    VIP support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Custom configs
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Beta access
                  </li>
                </ul>
              </div>

              {/* Buy Button */}
              <motion.a
                href="https://calamari.sellauth.com/product/30day"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 py-3 rounded-xl text-center text-white font-medium transition-all duration-300 block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Go Elite
              </motion.a>
            </motion.div>

            {/* Lifetime Plan */}
            <motion.div
              className="relative bg-black border border-yellow-500 rounded-2xl p-6 h-full flex flex-col justify-between group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255, 215, 0, 0.5)",
              }}
            >
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                BEST VALUE
              </motion.div>
              <div>
                <div className="text-center mb-6 mt-4">
                  <motion.h3
                    className="text-2xl font-bold mb-2 text-white"
                    animate={{ color: ["#ffffff", "#ffd700", "#ffffff"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Legend
                  </motion.h3>
                  <div className="text-4xl font-bold text-white mb-2">$199.99</div>
                  <p className="text-yellow-200">Lifetime Access</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-yellow-100">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    All premium features
                  </li>
                  <li className="flex items-center text-yellow-100">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Lifetime updates
                  </li>
                  <li className="flex items-center text-yellow-100">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Exclusive features
                  </li>
                  <li className="flex items-center text-yellow-100">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Legend status
                  </li>
                </ul>
              </div>

              {/* Buy Button */}
              <motion.a
                href="https://calamari.sellauth.com/product/lifetime"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 py-3 rounded-xl text-center text-black font-medium transition-all duration-300 block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Become Legend
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Money-back guarantee */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-300 font-medium">30-day money-back guarantee on all plans</span>
            </div>
          </motion.div>
        </motion.section>

        {/* Enhanced FAQ Section */}
        <motion.section
          className="container mx-auto px-4 py-20 relative z-20"
          ref={faqRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about Calamari and our gaming enhancement tools
            </p>
          </motion.div>

          <motion.div className="max-w-4xl mx-auto space-y-6" variants={containerVariants}>
            {[
              {
                question: "Is Calamari safe and undetected?",
                answer:
                  "Yes! Calamari uses advanced stealth technology and has maintained a 100% undetected rate since 2023. Our team constantly updates the software to stay ahead of anti-cheat systems.",
              },
              {
                question: "Which games does Calamari support?",
                answer:
                  "Calamari supports 30+ popular games including Rust, Fortnite, Apex Legends, CS:GO, Valorant, Call of Duty, PUBG, and many more. We regularly add support for new games.",
              },
              {
                question: "How quickly can I start using Calamari?",
                answer:
                  "Activation is instant! After purchase, you'll receive your license key immediately and can start using Calamari within seconds. Our injection technology activates in under 1 second.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We provide 24/7 expert support through Discord, live chat, and email. Our team of gaming experts is always ready to help you optimize your experience and resolve any issues.",
              },
              {
                question: "Can I use Calamari on multiple devices?",
                answer:
                  "Each license is tied to one device for security reasons. However, you can easily transfer your license to a new device through our support team if needed.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Yes! We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied with Calamari, we'll provide a full refund, no questions asked.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-black border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Enhanced Discord CTA */}
        <motion.section
          className="container mx-auto px-4 py-20 relative z-20"
          ref={discordRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-gradient-to-r from-[#5865F2]/20 to-[#7289DA]/20 border border-[#5865F2]/30 rounded-3xl p-12 text-center relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/10 to-[#7289DA]/10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div className="relative z-10" variants={itemVariants}>
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-6"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <span className="bg-gradient-to-r from-[#5865F2] via-[#7289DA] to-[#5865F2] bg-clip-text text-transparent">
                  Join Our Elite Community
                </span>
              </motion.h2>

              <motion.p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" variants={itemVariants}>
                Connect with over 50,000 elite gamers, get exclusive tips, early access to features, and 24/7 support
                from our expert team.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                variants={itemVariants}
              >
                <motion.a
                  href="https://discord.gg/calamari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] rounded-full font-bold text-lg transition-all duration-300 flex items-center"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 30px -10px rgba(88, 101, 242, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Join Discord
                </motion.a>

                <motion.div className="flex items-center text-gray-400" variants={itemVariants}>
                  <div className="flex -space-x-2 mr-3">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full border-2 border-black"
                      />
                    ))}
                  </div>
                  <span className="text-sm">50,000+ active members</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <Footer />

        {/* Video Modal */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideo(false)}
            >
              <motion.div
                className="bg-black rounded-2xl overflow-hidden max-w-4xl w-full aspect-video relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 text-white hover:text-red-400 z-10"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <iframe
                  src="https://www.youtube.com/embed/Zyb4ocZlJyQ?autoplay=1"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  )
}
