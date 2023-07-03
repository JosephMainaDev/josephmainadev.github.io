import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <nav className="mx-auto max-w-7xl px-6 lg:px-10 border-b-2 border-orange-100">
      <div className="relative flex h-24 items-center justify-between">
        <div className="flex flex-row items-center gap-5">
          <Link href="/">
            <Image
              src="https://avatars.githubusercontent.com/u/15126598?v=4"
              alt="Photo of Joseph Maina"
              width={100}
              height={100}
              className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 rounded-full"
              unoptimized
            />
          </Link>
          <div className="font-medium text-3xl">Joseph Maina</div>
        </div>
        <div className="flex flex-row gap-4 text-zinc-500">
          <Link href="#articles" className="hover:text-orange-500">Articles</Link>
          <Link href="#projects" className="hover:text-orange-500">Projects</Link>
          <Link href="#contact" className="hover:text-orange-500">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
