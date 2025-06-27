"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Shield, Zap, Target, Star, Play, ChevronDown, X } from "lucide-react"
import { useState, useRef } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UltimateFeatures from "@/components/ultimate-features"

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [showPricingModal, setShowPricingModal] = useState(false)
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const heroRef = useRef<HTMLDivElement>(null)

  const products = [
    {
      id: 1,
      name: "Valorant Full",
      game: "Valorant",
      image: "/images/bwvalo.png",
      features: ["Aimbot", "Triggerbot", "ESP", "Radar", "Agent ESP"],
      description: "Climb the ranks in Valorant with our undetected enhancement suite.",
      variants: [
        {
          duration: "1 Day",
          price: "$7.49",
          url: "https://checkout.sellhub.io/payment/f5ae1361-3e8e-11f0-941a-fa163ecbcb12",
        },
        {
          duration: "7 Days",
          price: "$24.99",
          url: "https://checkout.sellhub.io/payment/48657cee-3e8f-11f0-941a-fa163ecbcb12",
        },
        {
          duration: "30 Days",
          price: "$44.99",
          url: "https://checkout.sellhub.io/payment/2fc42a4c-3e95-11f0-941a-fa163ecbcb12",
        },
        {
          duration: "Lifetime",
          price: "$74.99",
          url: "https://checkout.sellhub.io/payment/024e3af4-3e9a-11f0-941a-fa163ecbcb12",
        },
      ],
    },
    {
      id: 2,
      name: "Fortnite Full",
      game: "Fortnite",
      image: "/images/bwfn.png",
      features: ["Aimbot", "ESP", "Building ESP", "Loot ESP", "Player Tracking"],
      description: "Get Victory Royales with our comprehensive Fortnite toolkit.",
      variants: [
        {
          duration: "1 Day",
          price: "$7.50",
          url: "https://checkout.sellhub.io/payment/97f7549b-5099-11f0-b17b-bc241181783f",
        },
        {
          duration: "7 Days",
          price: "$29.99",
          url: "https://checkout.sellhub.io/payment/c4fd179a-5099-11f0-b17b-bc241181783f",
        },
        {
          duration: "1 Month",
          price: "$49.99",
          url: "https://checkout.sellhub.io/payment/eaa5692f-5099-11f0-b17b-bc241181783f",
        },
      ],
    },
    {
      id: 3,
      name: "HWID Unban",
      game: "Universal",
      image: "/images/bwunlockall.png",
      features: ["Hardware ID Reset", "Anti-Cheat Bypass", "Instant Unban", "All Games", "Permanent Solution"],
      description: "Permanent hardware ID unbanning service for all supported games.",
      variants: [
        {
          duration: "One-time",
          price: "$14.99",
          url: "https://checkout.sellhub.io/payment/5c3e1642-3e9b-11f0-941a-fa163ecbcb12",
        },
        {
          duration: "Lifetime",
          price: "$39.99",
          url: "https://checkout.sellhub.io/payment/7cbaa681-3e9b-11f0-941a-fa163ecbcb12",
        },
      ],
    },
    {
      id: 4,
      name: "No Recoil Script",
      game: "Rust",
      image: "/images/bwrustscript.png",
      features: ["No Recoil", "All Weapons", "Auto-Spray", "Customizable", "Easy Setup"],
      description: "Perfect recoil control for all Rust weapons with customizable settings.",
      variants: [
        {
          duration: "3 Days",
          price: "$5.99",
          url: "https://checkout.sellhub.io/payment/b1d6db63-3ea9-11f0-941a-fa163ecbcb12",
        },
        {
          duration: "7 Days",
          price: "$11.99",
          url: "https://checkout.sellhub.io/payment/d06c1db1-3ea9-11f0-941a-fa163ecbcb12",
        },
        {
          duration: "30 Days",
          price: "$24.99",
          url: "https://checkout.sellhub.io/payment/27cd0d3d-3eab-11f0-941a-fa163ecbcb12",
        },
        {
          duration: "Lifetime",
          price: "$59.99",
          url: "https://checkout.sellhub.io/payment/7f80413c-3eab-11f0-941a-fa163ecbcb12",
        },
      ],
    },
    {
      id: 5,
      name: "Rainbow Six Full",
      game: "Rainbow Six Siege",
      image: "/images/bwr6.png",
      features: ["Wallhack", "Triggerbot", "Recoil Control", "Radar", "Callout ESP"],
      description: "Gain the tactical advantage in Rainbow Six Siege with precision tools.",
      variants: [
        {
          duration: "1 Day",
          price: "$6.50",
          url: "https://checkout.sellhub.io/payment/b2860e9e-4c97-11f0-b17b-bc241181783f",
        },
        {
          duration: "7 Days",
          price: "$24.99",
          url: "https://checkout.sellhub.io/payment/f066473a-4c97-11f0-b17b-bc241181783f",
        },
        {
          duration: "30 Days",
          price: "$54.99",
          url: "https://checkout.sellhub.io/payment/05c407ee-4c98-11f0-b17b-bc241181783f",
        },
      ],
    },
    {
      id: 6,
      name: "Valorant Unlock All",
      game: "Valorant",
      image: "/images/bwunlockall.png",
      features: ["All Skins", "All Agents", "All Content", "Instant Unlock", "Account Safe"],
      description: "Unlock all Valorant content instantly with our safe unlock service.",
      variants: [
        {
          duration: "1 Day",
          price: "$3.99",
          url: "https://checkout.sellhub.io/payment/ce1e5a59-5149-11f0-b17b-bc241181783f",
        },
        {
          duration: "7 Days",
          price: "$11.99",
          url: "https://checkout.sellhub.io/payment/09bde7f5-514a-11f0-b17b-bc241181783f",
        },
        {
          duration: "30 Days",
          price: "$21.99",
          url: "https://checkout.sellhub.io/payment/56cb53c6-514a-11f0-b17b-bc241181783f",
        },
        {
          duration: "Lifetime",
          price: "$39.99",
          url: "https://checkout.sellhub.io/payment/a2d1a55c-514a-11f0-b17b-bc241181783f",
        },
      ],
    },
    {
      id: 7,
      name: "Rust External",
      game: "Rust",
      image: "/images/bwrust.png",
      features: ["ESP/Wallhack", "Aimbot", "No Recoil", "Speed Hack", "Item ESP"],
      description: "Dominate Rust servers with our advanced ESP, aimbot, and utility features.",
      variants: [
        {
          duration: "1 Day",
          price: "$6.99",
          url: "https://checkout.sellhub.io/payment/1790f923-5213-11f0-b17b-bc241181783f",
        },
        {
          duration: "3 Days",
          price: "$14.99",
          url: "https://checkout.sellhub.io/payment/4274e844-5213-11f0-b17b-bc241181783f",
        },
        {
          duration: "7 Days",
          price: "$24.99",
          url: "https://checkout.sellhub.io/payment/6042f318-5213-11f0-b17b-bc241181783f",
        },
        {
          duration: "30 Days",
          price: "$59.99",
          url: "https://checkout.sellhub.io/payment/88993b62-5213-11f0-b17b-bc241181783f",
        },
        {
          duration: "Lifetime",
          price: "$449.99",
          url: "https://checkout.sellhub.io/payment/aa8df6fe-5213-11f0-b17b-bc241181783f",
        },
      ],
    },
  ]

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product)
    setShowPricingModal(true)
  }

  const scrollToPlans = () => {
    const plansSection = document.getElementById("products-section")
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const closeModal = () => {
    setShowPricingModal(false)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar />

      <div className="pt-20">
        {/* Animated background */}
        <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-blue-900/70 to-cyan-900/80 z-10"
            style={{ y: backgroundY }}
          />
          <div className="absolute inset-0 bg-[url('/images/bluewing-interface.png')] bg-cover bg-center opacity-20" />

          {/* Floating particles */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative z-20 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                BlueWing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The ultimate gaming enhancement suite. Dominate your favorite games with cutting-edge tools and
                undetectable technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={scrollToPlans}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Dominating</span>
                  <ArrowRight size={20} />
                </motion.button>
                <motion.div
                  className="flex items-center space-x-2 text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Play size={16} />
                  <span>Watch Demo</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { icon: Shield, label: "Undetected", value: "100%" },
                { icon: Zap, label: "Performance", value: "60+ FPS" },
                { icon: Target, label: "Accuracy", value: "99.9%" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ChevronDown className="w-8 h-8 text-cyan-400" />
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products-section" className="py-20 px-4 relative z-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Choose Your Weapon
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Select from our arsenal of game-specific enhancement tools, each crafted for maximum performance and
                stealth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative mb-6">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                      From {product.variants[0].price}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300">
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300">
                          +{product.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all duration-300"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="flex-1 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg font-semibold transition-all duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <UltimateFeatures />

        {/* Testimonials */}
        <section className="py-20 px-4 relative z-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                What Gamers Say
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "ProGamer2024",
                  game: "Rust",
                  text: "BlueWing's Smart Auto-Config feature automatically optimized my settings for maximum performance. Went from struggling to dominating servers!",
                  rating: 5,
                },
                {
                  name: "TacticalAce",
                  game: "R6 Siege",
                  text: "The precision and reliability are unmatched. Never been detected, always performing at the top of leaderboards.",
                  rating: 5,
                },
                {
                  name: "ValorantKing",
                  game: "Valorant",
                  text: "Clean interface, powerful features, and excellent support. Worth every penny for serious competitive players.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.game} Player</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Pricing Modal */}
      {showPricingModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-slate-800 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white">{selectedProduct.name}</h3>
                <p className="text-cyan-400">{selectedProduct.game}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <Image
              src={selectedProduct.image || "/placeholder.svg"}
              alt={selectedProduct.name}
              width={600}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <p className="text-gray-300 mb-6">{selectedProduct.description}</p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">All Features:</h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedProduct.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Choose Your Plan:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProduct.variants.map((variant: any, idx: number) => (
                  <motion.a
                    key={idx}
                    href={variant.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg border border-slate-600 hover:border-cyan-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-white mb-2">{variant.duration}</div>
                      <div className="text-2xl font-bold text-cyan-400 mb-3">{variant.price}</div>
                      <div className="text-sm text-gray-400 mb-3">
                        {variant.duration === "Lifetime"
                          ? "One-time payment"
                          : `Access for ${variant.duration.toLowerCase()}`}
                      </div>
                      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 py-2 px-4 rounded-lg text-white font-semibold transition-all duration-300">
                        Purchase Now
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  )
}
