import { FiDownload } from "react-icons/fi";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaMedium,
  FaDev,
  FaGlobe,
  FaTwitter,
  FaCodepen,
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Resume = () => {
  // Real client/company data
  const experiences = [
    {
      period: "2023 - Present",
      company: "Freelance (Upwork & Fiverr)",
      role: "Front-End Developer",
      description:
        "Delivered 16+ web solutions for international clients including responsive websites, UI components, and WordPress customizations with 100% client satisfaction.",
      achievements: [
        "5-star rating across all platforms",
        "95% repeat client rate",
      ],
    },
    {
      period: "2022 - 2023",
      company: "TechSolutions Inc.",
      role: "Junior Web Developer",
      description:
        "Collaborated on enterprise projects implementing responsive designs and optimizing front-end performance.",
      achievements: [
        "Reduced page load time by 40%",
        "Implemented accessibility improvements",
      ],
    },
  ];

  const education = [
    {
      period: "2023 - Present",
      institution: "Mohammadpur Kendriya College",
      degree: "Bachelor in Accounting",
      description:
        "Maintaining 3.00 GPA while developing technical skills through self-study and practical projects.",
    },
  ];

  const certificates = [
    {
      title: "Web Developer",
      issuer: "Bootcamp",
      date: "May 2024",
      credential: "Certificate ID: XYZ12345",
      link: "#",
    },
    {
      title: "MERN stack Developer",
      issuer: "freeCodeCamp",
      date: "Jan 2025",
      credential: "Certificate ID: FCC-JS-123",
      link: "#",
    },
  ];

  const platforms = [
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~YOUR_PROFILE_ID",
      icon: <SiUpwork className="mr-2 text-lg" />,
      color: "bg-success hover:bg-success-focus",
    },
    {
      name: "GitHub",
      url: "https://github.com/YOUR_USERNAME",
      icon: <FaGithub className="mr-2 text-lg" />,
      color: "bg-neutral hover:bg-neutral-focus",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/YOUR_PROFILE",
      icon: <FaLinkedinIn className="mr-2 text-lg" />,
      color: "bg-primary hover:bg-primary-focus",
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/YOUR_USER_ID",
      icon: <FaStackOverflow className="mr-2 text-lg" />,
      color: "bg-warning hover:bg-warning-focus",
    },
    {
      name: "Portfolio",
      url: "https://yourportfolio.com",
      icon: <FaGlobe className="mr-2 text-lg" />,
      color: "bg-secondary hover:bg-secondary-focus",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/YOUR_USERNAME",
      icon: <FaTwitter className="mr-2 text-lg" />,
      color: "bg-info hover:bg-info-focus",
    },
    {
      name: "CodePen",
      url: "https://codepen.io/YOUR_USERNAME",
      icon: <FaCodepen className="mr-2 text-lg" />,
      color: "bg-neutral hover:bg-neutral-focus",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/YOUR_CHANNEL",
      icon: <FaYoutube className="mr-2 text-lg" />,
      color: "bg-error hover:bg-error-focus",
    },
  ];

  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="min-h-screen bg-base-100 text-base-content py-12 px-4 sm:px-6 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header with download button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl font-extrabold text-center sm:text-left">
            <span>My</span> <span className="text-primary">Resume</span>
          </h2>
          <a
            href="/path-to-resume.pdf"
            download
            className="btn btn-outline btn-primary mt-4 sm:mt-0 lg:hidden"
          >
            <FiDownload className="mr-2" />
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary pb-2 flex items-center text-base-content">
                <svg
                  className="w-5 h-5 mr-2 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-4 pl-4 border-primary relative"
                  >
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-2"></div>
                    <p className="text-base-content/70 font-medium">
                      {edu.period} | {edu.institution}
                    </p>
                    <h4 className="text-xl font-semibold mt-1">{edu.degree}</h4>
                    <p className="text-base-content/80 mt-2">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary pb-2 flex items-center text-base-content">
                <svg
                  className="w-5 h-5 mr-2 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-4 pl-4 border-primary relative"
                  >
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-2"></div>
                    <p className="text-base-content/70 font-medium">
                      {exp.period} | {exp.company}
                    </p>
                    <h4 className="text-xl font-semibold mt-1">{exp.role}</h4>
                    <p className="text-base-content/80 mt-2">
                      {exp.description}
                    </p>
                    {exp.achievements && (
                      <ul className="mt-3 space-y-1 list-disc list-inside text-base-content/80">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary pb-2 flex items-center text-base-content">
                <svg
                  className="w-5 h-5 mr-2 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Technical Skills
              </h3>
              <div className="space-y-4">
                {[
                  { name: "HTML/CSS", level: 99, years: "5+ years" },
                  { name: "JavaScript", level: 90, years: "4 years" },
                  { name: "React", level: 85, years: "3 years" },
                  { name: "Tailwind CSS", level: 95, years: "3 years" },
                  { name: "WordPress", level: 88, years: "4 years" },
                  { name: "UI/UX Design", level: 82, years: "3 years" },
                ].map((skill) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-base-content">
                        {skill.name}{" "}
                        <span className="text-sm text-base-content/70">
                          ({skill.years})
                        </span>
                      </span>
                      <span className="text-sm font-medium text-base-content">
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar
                      completed={skill.level}
                      bgColor="#3b82f6" // Tailwind blue-500
                      baseBgColor="#e5e7eb" // Tailwind gray-200
                      height="12px"
                      isLabelVisible={false}
                      animateOnRender={true}
                      transitionDuration="2s"
                      className="rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary pb-2 flex items-center text-base-content">
                <svg
                  className="w-5 h-5 mr-2 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Platforms
              </h3>

              <div className="flex flex-wrap gap-3">
                {platforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`badge badge-lg text-white border-0 px-4 py-3 flex items-center transition-colors duration-300 ${platform.color}`}
                  >
                    {platform.icon}
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary pb-2 flex items-center text-base-content">
            <svg
              className="w-5 h-5 mr-2 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="card-body">
                  <h4 className="card-title text-base-content">{cert.title}</h4>
                  <p className="text-base-content/80">{cert.issuer}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <p className="text-sm text-base-content/70">
                        {cert.credential}
                      </p>
                      <p className="text-sm text-base-content/60">
                        {cert.date}
                      </p>
                    </div>
                    <a
                      href={cert.link}
                      className="btn btn-ghost btn-sm text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
