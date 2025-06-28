"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Star, Shield, Zap, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Products" },
    { id: "valorant", name: "Valorant" },
    { id: "fortnite", name: "Fortnite" },
    { id: "rust", name: "Rust" },
    { id: "r6", name: "Rainbow Six" },
    { id: "utilities", name: "Utilities" },
  ]

  const products = [
    {
      id: 1,
      name: "Valorant Full",
      category: "valorant",
      game: "Valorant",
      image: "/images/bwvalo.png",
      price: "$7.49",
      rating: 4.9,
      reviews: 1247,
      features: ["Aimbot", "ESP", "Triggerbot", "Radar"],
      description: "Complete Valorant enhancement suite with advanced aimbot and ESP features.",
      popular: true,
    },
    {
      id: 2,
      name: "Fortnite Full",
      category: "fortnite",
      game: "Fortnite",
      image: "/images/bwfn.png",
      price: "$7.50",
      rating: 4.8,
      reviews: 892,
      features: ["Aimbot", "ESP", "Building ESP", "Loot ESP"],
      description: "Dominate Fortnite with our comprehensive toolkit for Victory Royales.",
      popular: false,
    },
    {
      id: 3,
      name: "Rust External",
      category: "rust",
      game: "Rust",
      image: "/images/bwrust.png",
      price: "$6.99",
      rating: 4.9,
      reviews: 2156,
      features: ["ESP", "Aimbot", "No Recoil", "Speed Hack"],
      description: "Advanced Rust cheats with ESP, aimbot, and utility features.",
      popular: true,
    },
    {
      id: 4,
      name: "Rainbow Six Full",
      category: "r6",
      game: "Rainbow Six Siege",
      image: "/images/bwr6.png",
      price: "$6.50",
      rating: 4.7,
      reviews: 634,
      features: ["Wallhack", "Triggerbot", "Recoil Control", "Radar"],
      description: "Tactical advantage in Rainbow Six Siege with precision tools.",
      popular: false,
    },
    {
      id: 5,
      name: "Valorant Unlock All",
      category: "valorant",
      game: "Valorant",
      image: "/images/bwunlockall.png",
      price: "$3.99",
      rating: 4.6,
      reviews: 445,
      features: ["All Skins", "All Agents", "All Content", "Instant Unlock"],
      description: "Unlock all Valorant content instantly with our safe service.",
      popular: false,
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.game.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our complete range of gaming enhancement tools, each designed for maximum performance and
              stealth.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {product.popular && (
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-2 text-sm font-bold">
                    🔥 POPULAR
                  </div>
                )}

                <div className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-cyan-400 font-bold">From {product.price}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-400">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full">
                        +{product.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/purchase`}
                    className="block w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg text-white font-semibold text-center transition-all duration-300"
                  >
                    View Product
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-gray-400 text-lg">No products found matching your criteria.</div>
            </motion.div>
          )}

          {/* Features Section */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center p-6 bg-slate-800/30 rounded-xl">
              <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Undetected</h3>
              <p className="text-gray-400">
                Advanced anti-detection technology keeps you safe from all anti-cheat systems.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl">
              <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
              <p className="text-gray-400">Receive your product immediately after purchase with automated delivery.</p>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl">
              <Target className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-400">Our dedicated support team is available around the clock to assist you.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
