export const Projects = () => {
  const projects = [
    { 
      name: "Facility Accessibility App", 
      description: `
        <b>Language:</b> Typescript <br/> 
        <b>Frontend Framework:</b> Expo-React Native <br/> 
        <b>About:</b> A mobile app designed to help people with disabilities assess whether public facilities meet their accessibility needs. The app provides detailed ratings of facility accessibility, empowering users to make informed decisions about visiting locations that cater to their specific requirements. The project combines accessibility best practices and modern mobile development techniques to enhance the user experience.
      `, 
      link: "https://drive.google.com/drive/folders/1LoIyNDDRjvS_BW3q5_-bnTWd3U0UzP4q?usp=sharing" 
    },
    { 
      name: "Database Banking System", 
      description: `
        <b>Language:</b> Java <br/> 
        <b>Database:</b> Oracle <br/> 
        <b>About:</b> A project developed in my Database Systems and Applications class that simulates a real-world banking system. The system allows for the creation of users, deposits, withdrawals, and transactions. It incorporates PL/SQL for stored procedures and complex queries, with a focus on database integrity and performance optimization. This project provided hands-on experience with database modeling, relational queries, and transaction handling.
      `, 
      link: "https://github.com/sarahzwart/cse241-project" 
    },
    { 
      name: "Plant Pal",
      description: "<b>Frontend:</b> Vite + React, Javascript, Shadcn + Tailwind CSS, Axios, Google OAuth <br/> <b>Backend:</b> Express Server <br/> <b>Database:</b> ElephantSQL <br/> <b>APIs:</b> Perenual Plant API, Google OAuth API <br/> <b>About:</b> Plant Pal is an app that helps users manage their online garden by tracking when to water their plants. Users can log in via Google, add plants to their garden, and keep track of their watering status. Paid users receive personalized plant care tips to ensure their plants thrive.",
      link: "https://github.com/sarahzwart/plantpal" 
    },
  ];

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-600">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg transition duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-600 text-center">{project.name}</h3>
              <p 
                className="mt-2 text-gray-600" 
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[#f759ba] hover:text-[#ffacdf] transition duration-300 text-center"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
