import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "BlueWing | Premium Gaming Enhancement Tools",
  description:
    "BlueWing offers undetected premium gaming enhancement tools for Rust, Valorant, Rainbow Six Siege, Fortnite and more. Dominate every match with precision and style!",
  keywords: [
    "bluewing",
    "game enhancement",
    "rust cheats",
    "valorant cheats",
    "r6 siege cheats",
    "fortnite cheats",
    "undetected cheats",
    "aimbot",
    "esp",
    "wallhack",
  ],
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bwfooter-KTdG54jxHF96VUc7Bs40vJqsgJc8mh.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bwfooter-KTdG54jxHF96VUc7Bs40vJqsgJc8mh.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bwfooter-KTdG54jxHF96VUc7Bs40vJqsgJc8mh.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientLayout>
      <div className="overflow-x-hidden">{children}</div>
    </ClientLayout>
  )
}


import './globals.css'