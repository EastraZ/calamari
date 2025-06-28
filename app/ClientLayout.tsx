"use client"

import type React from "react"
import Head from "next/head"

import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bwfooter-KTdG54jxHF96VUc7Bs40vJqsgJc8mh.png"
        />
        <link
          rel="shortcut icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bwfooter-KTdG54jxHF96VUc7Bs40vJqsgJc8mh.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bwfooter-KTdG54jxHF96VUc7Bs40vJqsgJc8mh.png"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
