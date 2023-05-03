import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold">Joseph Maina Portfolio</h1>
    </main>
  )
}
