export default function PortfolioItem() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-extrabold">Portfolio</h1>
      <p>This is my personal website. I showcase my most interesting projects. A link to the live preview is included. Go ahead an try them.</p>
      <p>I apprecieate all feedback.</p>
      <div className="flex flex-wrap gap-6"></div>
      <button className="bg-orange-500 hover:bg-orange-400">Live preview</button>
    </div>
  );
}
