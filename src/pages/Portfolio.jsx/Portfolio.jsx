import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "🍽️ Savory Spoon",
      image: "https://i.ibb.co/DDtWMbVB/SAVOY-SPOON.png",
      technologies: ["React", "Node.js", "MongoDB", "Firebase", "express"],
      description:
        "Savory Spoon is a modern, responsive Restaurant Management Web Application built using the MERN Stack. This platform is designed to enhance the digital presence of restaurants, improve customer interaction, and streamline backend operations for better efficiency.",
      liveLink: "https://assignment-11-90ab7.web.app/",
      githubLink: "https://github.com/Sabbir-XD/Savory-Spoon",
      challenges: [
        "Integrating Firebase Authentication with secure backend JWT flow",
        "Building a performant UI for blog sorting, filtering, and search with MongoDB queries.",
        "Creating a seamless UX for comments, wishlist toggles, and feature detection.",
      ],
      improvements: [
        "Add product reviews and user rating system for menu items",
        "Implement AI-based dish recommendation engine",
        "Enhance mobile user experience with faster navigation and animations",
        "Add multi-language support for wider accessibility",
        "Integrate analytics dashboard for admin insights",
      ],
    },

    {
      id: 2,
      title: "🛠️ WorkNGo",
      image: "https://i.ibb.co/3mKX3c1W/workngo.png",
      technologies: ["React", "Firebase", "MongoDB", "Jwt", "Node"],
      description:
        "WorkNGo is a dynamic freelance task marketplace that connects clients with freelancers for small-scale jobs. Whether you're looking to get a task done or searching for freelance work, WorkNGo provides a seamless and efficient way to post tasks, place bids, and collaborate in real time.",
      liveLink: "https://assaignment-10-client-162f6.web.app/",
      githubLink: "https://github.com/Sabbir-XD/WorkNGo",
      challenges: [
        "Integrating Dashboard design and Add Data, deleted data, Update data",
        "Building a performant UI for blog sorting, filtering, and search with MongoDB queries.",
        "Creating a seamless UX for comments, wishlist toggles, and feature detection.",
      ],
      improvements: [
        "Add product reviews and user rating system for menu items",
        "Implement AI-based dish recommendation engine",
        "Enhance mobile user experience with faster navigation and animations",
        "Add multi-language support for wider accessibility",
        "Integrate analytics dashboard for admin insights",
      ],
    },
    {
      id: 3,
      title: "Espresso Emporium",
      image: "https://i.ibb.co/PdVSR94/coffee.png",
      technologies: ["React", "Tailwind", "Firebase", "MongoDB", "Express"],
      description:
        "A Firebase-authenticated coffee ordering web application built with modern web technologies. Users can register, login, and enjoy a smooth UI experience. The app uses Firebase for authentication and MongoDB for efficient data storage.",
      liveLink: "https://coffee-project-auth-fb3c5.web.app/",
      githubLink: "https://github.com/Sabbir-XD/Coffee-Project-Client",
      challenges: [
        "Integrating Firebase Authentication and MongoDB in Database",
        "Implementing Large Input form data handling",
        "Creating a seamless UX for comments, wishlist toggles, and feature detection.",
      ],
      improvements: [
        "Add product reviews and user rating system for menu items",
        "Implement AI-based dish recommendation engine",
        "Enhance mobile user experience with faster navigation and animations",
        "Add multi-language support for wider accessibility",
        "Integrate analytics dashboard for admin insights",
      ],
    },
    {
      id: 4,
      title: "Public Jobs",
      image: "https://i.ibb.co/yn7b4Rch/public-jobs.png",
      technologies: ["React", "Tailwind CSS", "Firebase", "DaisyUI"],
      description:
        "Public Jobs is a modern job portal application designed to connect job seekers with employers. The platform offers a user-friendly interface for browsing, searching, and applying for various job opportunities.",
      liveLink: "https://assaignmet-09.web.app/",
      githubLink: "https://github.com/Sabbir-XD/PuBLic-Jobs",
      challenges: [
        "Implement a secure backend with a user in Firebase authentication system",
        "Building a performant UI and Protected Routes and User Dashboard",
        "Creating a seamless UX for comments, Modern UI with Tailwind CSS and DaisyUI.",
      ],
      improvements: [
        "Add Dynamic Backend data fetch in MongoDB",
        "Implement AI-based dish recommendation engine",
        "Enhance mobile user experience with faster navigation and animations",
        "Add multi-language support for wider accessibility",
        "Integrate analytics dashboard for admin insights",
      ],
    },
  ];

  return (
    <section
      className="py-12 bg-base-200 transition-colors duration-500"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-2">
          <span>My</span> <span className="text-primary">Project</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-base-content/70">
          Here are some of my best projects showcasing my skills and experience.
        </p>

        {selectedProject ? (
          <div className="bg-base-100 rounded-lg shadow-xl p-6 max-w-4xl mx-auto text-base-content">
            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center text-primary mb-6 hover:text-primary-focus transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Back to Projects
            </button>

            <div className="grid md:grid-cols-1 gap-8">
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-2xl object-contain shadow-md"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h3>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="text-2xl font-semibold mb-2">
                    Challenges Faced:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-base-content/80">
                    {selectedProject.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-2xl font-semibold mb-2">
                    Future Improvements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-base-content/80">
                    {selectedProject.improvements.map((improvement, i) => (
                      <li key={i}>{improvement}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center gap-2 px-6 py-2 text-white transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-primary flex items-center gap-2 px-6 py-2"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group bg-base-100 border border-base-300 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-66 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center rounded-xl">
                  <h3 className="text-white text-xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-5 py-2 border border-white rounded-full text-white hover:bg-white hover:text-primary transition-colors duration-300"
                  >
                    View Details <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
