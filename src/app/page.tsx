import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-row items-center justify-center">
        <div>
          <h1 className="text-5xl font-extrabold">Joseph Maina, a software engineer and educator.</h1>
          <p>I help turn to your to live online. 100s of open source contributions. React, Tailwind CSS and MongoDB</p>
          <button>Get in touch</button>
        </div>
        <Image
          src="https://avatars.githubusercontent.com/u/15126598?v=4"
          alt="Picture of Joseph Maina"
          width={500}
          height={500}
          className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 rounded-full"
          unoptimized
        />
      </div>
      <div>
        <h2>Testimonials from customers and people I have worked with.</h2>
        <div>These will be small cards with comments that scroll from left to right along the bottom of the screen.</div>
      </div>
      <div>
        <h2>Open source contributions that I want to get me a job</h2>
        <div>Contribution number ONE plus link to the issue, pull request and merge.</div>
        <div>Contribution number TWO plus link to the issue, pull request and merge.</div>
        <div>Contribution number THREE plus link to the issue, pull request and merge.</div>
      </div>
      <div>
        <p>Recent posts. Two or three posts? Decide and adjust accordingly.</p>
        <div>
          <h2>Image for the post</h2>
          <p>Text from the image. I have forgotten what it is called lol!</p>
        </div>
        <div>
          <h2>Image for the post</h2>
          <p>Text from the image. I have forgotten what it is called lol!</p>
        </div>
        <div>
          <p>See more posts Link</p>
        </div>
      </div>
      <div>
        <h2>Portfolio (of projects I have made). Might be 3 of my favourite projects. Link to Portfolio page with more projects?</h2>
        <div>
          <div>This will be a screenshot of the project.</div>
          <div>This will be a small text block giving a few details about the project. The entire card is a link to GitHub where the code is hosted/readme.</div>
          <div>List of tech used for this project.</div>
        </div>
      </div>
      <div>
        <h2>Get in touch with me</h2>
        <p>Links to social media, email, GitHub and LinkedIn</p>
      </div>
    </main>
  )
}
