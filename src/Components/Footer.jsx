const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-gray-800 bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© 2026 Portfolio. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Telegram</a>
          <a href="#" className="hover:text-white">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;