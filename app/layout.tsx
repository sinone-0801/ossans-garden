import "./globals.css"
import type { Metadata } from "next"
import { Noto_Serif_JP, M_PLUS_Rounded_1c } from "next/font/google"

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
})

const mPlusRounded1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-m-plus-rounded",
})

export const metadata: Metadata = {
  title: "おっさんず・ガーデン",
  description: "おっさんのおっさんによるおっさんのためのガーデン",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.variable} ${mPlusRounded1c.variable} font-sans`}>{children}</body>
    </html>
  )
}

