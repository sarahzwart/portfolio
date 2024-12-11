export const Projects = () => {
  const projects = [
    { name: "Accessibility App", description: "A React Native app for public space accessibility ratings." },
    { name: "Banking System", description: "A database project simulating real-world banking operations." },
  ];

  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-purple-600">Projects</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg transition duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-purple-600">{project.name}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <link></link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
