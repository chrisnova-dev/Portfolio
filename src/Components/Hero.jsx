const Hero = () => {
  return (
    <header id="home" className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-5xl font-bold text-slate-900">Hi, I'm Chris Nova</h1>
        <h2 className="text-2xl font-semibold text-[#0047BB] border-b-2 border-gray-100 pb-2 inline-block">
          Frontend & Web3 Developer
        </h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
          I build clean websites and help Web3 communities grow. Currently learning React and JavaScript.
        </p>
        <a href="#projects" className="inline-block bg-[#0047BB] hover:bg-blue-800 text-white px-8 py-3 rounded-md font-semibold transition-all">
          View Projects
        </a>
      </div>
      <div className="flex-1 w-full max-w-md shadow-xl rounded-2xl overflow-hidden">
        <img src="/profile.jpg" alt="Profile" />
      </div>
    </header>
  );
};

export default Hero;