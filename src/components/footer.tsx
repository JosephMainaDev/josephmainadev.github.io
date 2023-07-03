import Socials from "./socials"
export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl p-6 flex flex-wrap justify-between lg:p-12 mt-10 border-t-2 border-orange-100">
      <div className="flex gap-6">
        <Socials />
      </div>
      <p className="text-sm text-zinc-400">&copy; Joseph Maina 2023. All rights reserved.</p>
    </footer>
  )
}