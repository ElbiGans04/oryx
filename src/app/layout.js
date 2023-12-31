import './globals.css'
import { Inter, Chivo, Josefin_Slab, IM_Fell_Great_Primer } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const chivo = Chivo({ subsets: ['latin'], variable: '--font-chivo' })
const josefin_Slab = Josefin_Slab({ subsets: ['latin'],  variable: '--font-josefin-slab' })
const iM_Fell_Great_Primer = IM_Fell_Great_Primer({ subsets: ['latin'], weight: '400',  variable: '--font-im-feel-great-primer' })

export const metadata = {
  title: 'ORYX',
  description: 'ORYX COUNTDOWN',
  viewport: 'width=device-width, initial-scale=1.0',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${chivo.variable} ${josefin_Slab.variable} ${iM_Fell_Great_Primer.variable}`}>{children}</body>
    </html>
  )
}
