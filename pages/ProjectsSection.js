import React from "react"; // Import React

const ProjectCard = ({ title, description, liveLink, repoLink }) => (
  <div className="bg-gray-100 dark:bg-grape border-solid border-2 shadow-lg rounded-lg overflow-hidden m-5">
    <div className="px-6 py-4">
      <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-base">
        {description}
      </p>
    </div>
    <div className="px-6 py-4">
      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold hover:underline mr-4"
        >
          Live Site
        </a>
      )}
      {repoLink && (
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 font-semibold hover:underline"
        >
          Code Repository
        </a>
      )}
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Fake Store",
      description: "Description of Project 1...",
      liveLink: "https://example.com",
      repoLink: "https://github.com/example/project1",
    },
    {
      title: "You tube Clone",
      description: "Description of Project 2...",
      liveLink: "https://example.com",
      repoLink: "https://github.com/example/project2",
    },
    {
      title: "Todo App",
      description: "Description of Project 1...",
      liveLink: "https://example.com",
      repoLink: "https://github.com/example/project1",
    },
    {
      title: "Live Streaming App NextJS",
      description: "Description of Project 1...",
      liveLink: "https://example.com",
      repoLink: "https://github.com/example/project1",
    },
  ];

  return (
    <section className="py-20 dark:bg-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
