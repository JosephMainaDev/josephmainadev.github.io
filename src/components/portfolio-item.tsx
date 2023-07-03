import Image from "next/image";

const Tech = ({ tech }: { tech: string}) => (<span className="border border-zinc-400 rounded-full py-1 px-3">{tech}</span>)

export default function PortfolioItem() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full gap-6 items-center">
        <div className="flex flex-col w-1/2 gap-6">
          <h1 className="text-4xl font-extrabold">Portfolio</h1>
          <p>
            This is my personal website. I showcase my most interesting projects. A
            link to the live preview is included. Go ahead an try them.
          </p>
          <p>I apprecieate all feedback.</p>
          <div className="flex flex-wrap gap-6 text-sm font-medium text-zinc-500">
            <Tech tech="TypeScript" />
            <Tech tech="Next.js" />
            <Tech tech="React" />
            <Tech tech="Tailwind CSS" />
          </div>
          <div className="flex text-white">
            <a
              href="https://josephmainadev.github.io"
              target="_blank"
              className="bg-orange-500 hover:bg-orange-400 hover:underline flex flex-row gap-3 border border-orange-500 rounded-full py-3 px-5"
            >
              <span>Live Preview</span>
              <span className="inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <Image
            src="/portfolio.png"
            alt="Portfolio site screenshot for Joseph Maina"
            width={500}
            height={500}
            unoptimized
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
