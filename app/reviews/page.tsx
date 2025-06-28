"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, ThumbsUp, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ReviewsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedRating, setSelectedRating] = useState("all")

  const filters = [
    { id: "all", name: "All Reviews" },
    { id: "valorant", name: "Valorant" },
    { id: "fortnite", name: "Fortnite" },
    { id: "rust", name: "Rust" },
    { id: "r6", name: "Rainbow Six" },
  ]

  const ratingFilters = [
    { id: "all", name: "All Ratings" },
    { id: "5", name: "5 Stars" },
    { id: "4", name: "4+ Stars" },
    { id: "3", name: "3+ Stars" },
  ]

  const reviews = [
    {
      id: 1,
      user: "ProGamer2024",
      product: "Valorant Full",
      category: "valorant",
      rating: 5,
      date: "2024-01-15",
      verified: true,
      title: "Absolutely incredible!",
      content:
        "I've been using BlueWing's Valorant cheat for 3 months now and it's been flawless. The aimbot is smooth and natural-looking, ESP is crystal clear, and I've never been detected. Went from Gold to Immortal in just 2 weeks!",
      helpful: 47,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ProGamer2024",
    },
    {
      id: 2,
      user: "RustKing99",
      product: "Rust External",
      category: "rust",
      rating: 5,
      date: "2024-01-12",
      verified: true,
      title: "Best Rust cheat on the market",
      content:
        "After trying multiple Rust cheats, BlueWing is by far the best. The ESP shows everything I need - players, loot, animals, resources. The aimbot is deadly accurate but looks completely natural. Customer support is also top-notch!",
      helpful: 38,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RustKing99",
    },
    {
      id: 3,
      user: "TacticalAce",
      product: "Rainbow Six Full",
      category: "r6",
      rating: 5,
      date: "2024-01-10",
      verified: true,
      title: "Perfect for competitive play",
      content:
        "The wallhack in R6 is game-changing. Being able to see enemy positions and gadgets gives me such a tactical advantage. The triggerbot is instant and the recoil control makes every weapon feel like a laser beam.",
      helpful: 29,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TacticalAce",
    },
    {
      id: 4,
      user: "FortniteGod",
      product: "Fortnite Full",
      category: "fortnite",
      rating: 4,
      date: "2024-01-08",
      verified: true,
      title: "Great features, amazing support",
      content:
        "The Fortnite cheat has everything I need. Aimbot works perfectly, ESP shows all players and loot, and the building assistance is incredible. Only minor issue is sometimes the loot ESP can be a bit overwhelming, but you can adjust the settings.",
      helpful: 22,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=FortniteGod",
    },
    {
      id: 5,
      user: "ValorantPro",
      product: "Valorant Unlock All",
      category: "valorant",
      rating: 5,
      date: "2024-01-05",
      verified: true,
      title: "Instant unlock worked perfectly",
      content:
        "Bought the Valorant unlock all service and it worked instantly. Got all the skins, agents, and content I wanted without any issues. Account is still safe after 2 weeks. Definitely worth the money!",
      helpful: 31,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ValorantPro",
    },
    {
      id: 6,
      user: "CompetitivePlayer",
      product: "Valorant Full",
      category: "valorant",
      rating: 5,
      date: "2024-01-03",
      verified: true,
      title: "Undetected for months",
      content:
        "I've been using this for 6 months straight and never had any detection issues. The features are constantly updated and the quality is consistent. The Discord community is also very helpful for settings and tips.",
      helpful: 55,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CompetitivePlayer",
    },
    {
      id: 7,
      user: "RustSurvivor",
      product: "Rust External",
      category: "rust",
      rating: 4,
      date: "2024-01-01",
      verified: true,
      title: "Solid performance",
      content:
        "Really good Rust cheat overall. The ESP is detailed and the aimbot is smooth. Speed hack is fun for getting around the map quickly. Only complaint is that the UI could be a bit more user-friendly, but the functionality is excellent.",
      helpful: 18,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RustSurvivor",
    },
    {
      id: 8,
      user: "SiegeOperator",
      product: "Rainbow Six Full",
      category: "r6",
      rating: 5,
      date: "2023-12-28",
      verified: true,
      title: "Game changer for ranked",
      content:
        "This completely transformed my R6 experience. The wallhack lets me pre-aim perfectly, and the callout ESP helps with team communication. Went from Silver to Platinum in just one week of using this.",
      helpful: 26,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SiegeOperator",
    },
  ]

  const filteredReviews = reviews.filter((review) => {
    const matchesCategory = selectedFilter === "all" || review.category === selectedFilter
    const matchesRating =
      selectedRating === "all" ||
      (selectedRating === "5" && review.rating === 5) ||
      (selectedRating === "4" && review.rating >= 4) ||
      (selectedRating === "3" && review.rating >= 3)
    return matchesCategory && matchesRating
  })

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const ratingDistribution = [5, 4, 3, 2, 1].map(
    (rating) => reviews.filter((review) => review.rating === rating).length,
  )

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
              Customer Reviews
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See what our customers say about BlueWing's gaming enhancement tools.
            </p>
          </motion.div>

          {/* Rating Overview */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-cyan-400 mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < Math.floor(averageRating) ? "text-yellow-400 fill-current" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-gray-400">Based on {reviews.length} reviews</div>
              </div>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating, index) => (
                  <div key={rating} className="flex items-center">
                    <span className="w-8 text-sm">{rating}★</span>
                    <div className="flex-1 mx-3 bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-cyan-400 h-2 rounded-full"
                        style={{
                          width: `${(ratingDistribution[index] / reviews.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="w-8 text-sm text-gray-400">{ratingDistribution[index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedFilter === filter.id
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              {ratingFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedRating(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedRating === filter.id
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Reviews Grid */}
          <div className="space-y-6">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <Image
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.user}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-bold text-white">{review.user}</h3>
                        {review.verified && (
                          <div className="flex items-center space-x-1 bg-green-600/20 text-green-400 px-2 py-1 rounded-full text-xs">
                            <CheckCircle className="h-3 w-3" />
                            <span>Verified</span>
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-gray-400">{review.date}</div>
                    </div>

                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-cyan-400">{review.product}</span>
                    </div>

                    <h4 className="font-semibold text-white mb-2">{review.title}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{review.content}</p>

                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">Helpful ({review.helpful})</span>
                      </button>
                      <div className="text-sm text-gray-500">Product: {review.product}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-gray-400 text-lg">No reviews found matching your criteria.</div>
            </motion.div>
          )}

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center p-6 bg-slate-800/30 rounded-xl">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Verified Reviews</h3>
              <p className="text-gray-400">All reviews are from verified customers who have purchased our products.</p>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">High Satisfaction</h3>
              <p className="text-gray-400">Over 95% of our customers rate us 4 stars or higher.</p>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl">
              <CheckCircle className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Authentic Feedback</h3>
              <p className="text-gray-400">We never fake reviews - all feedback comes from real users.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
