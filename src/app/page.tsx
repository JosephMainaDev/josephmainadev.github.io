import Socials from "@/components/socials";

export default function Home() {
  return (
    <main>
      <div className="mx-auto flex min-h-screen max-w-2xl flex-row items-center md:p-6">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-5xl font-extrabold">
            Software Engineer & Educator.
          </h1>
          <p>
            Let your ideas come alive. React, Tailwind CSS and MongoDB.
          </p>

          <div className="flex gap-6 mt-6">
            <Socials />
          </div>
        </div>
      </div>

      <div id="articles">
        <h2>Recent articles</h2>
        <div>
          These are articles that I have written on Hashnode to get writing opportunities.
        </div>
        <ul>
          <li>This is the first</li>
          <li>The second article</li>
          <li>And a third as well</li>
        </ul>
      </div>

      <div>
        <h2>Testimonials from customers and people I have worked with.</h2>
        <div>
          These will be small cards with comments that scroll from left to right
          along the bottom of the screen.
        </div>
      </div>

      <div>
        <h2>Open source contributions that I want to get me a job</h2>
        <div>
          Contribution number ONE plus link to the issue, pull request and
          merge.
        </div>
        <div>
          Contribution number TWO plus link to the issue, pull request and
          merge.
        </div>
        <div>
          Contribution number THREE plus link to the issue, pull request and
          merge.
        </div>
      </div>

      <div className="min-h-screen w-full bg-orange-100" id="projects">
        <h2 className="text-base font-semibold text-orange-500">Projects</h2>
        <div>
          <div>This will be a screenshot of the project.</div>
          <div>
            This will be a small text block giving a few details about the
            project. The entire card is a link to GitHub where the code is
            hosted/readme.
          </div>
          <div>List of tech used for this project.</div>
        </div>
      </div>

      <div id="contact">
        <h2 className="text-lg font-bold">Get in touch with me</h2>
        <p>Links to social media, email, GitHub and LinkedIn</p>
      </div>
    </main>
  );
}
