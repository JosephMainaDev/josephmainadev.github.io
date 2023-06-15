import Image from "next/image"

export default function Header() {
  return (
    <nav className="mx-auto max-w-7xl px-6 lg:px-10 border-b-2 border-orange-100">
      <div className="relative flex h-24 items-center justify-between">
        <div className="flex flex-row items-center gap-5">
          <Image
            src="https://avatars.githubusercontent.com/u/15126598?v=4"
            alt="Picture of Joseph Maina"
            width={100}
            height={100}
            className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 rounded-full"
            unoptimized
          />
          <div className="font-medium text-3xl">Joseph Maina</div>
        </div>
        <div className="flex flex-row gap-4">
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </div>
    </nav>
  )
}