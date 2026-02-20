const Projects = () => {
  const list = [
    { title: "Interactive Buttons", desc: "Custom UI components", img:"/button.jpeg" },
    { title: "React Blog Site", desc: "Built with React", img: "/blog.jpeg" },
    { title: "Crypto Token Page", desc: "Web3 Landing Page", img: "/crypto.jpeg" }
  ];
  return (
    <section id="projects" className="py-20 bg-gray-50/50 border-t">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-12">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 ">
          {list.map((p, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover hover:scale-105 transition-transform " />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-500 mb-6">{p.desc}</p>
                <button className="bg-[#0047BB] text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;