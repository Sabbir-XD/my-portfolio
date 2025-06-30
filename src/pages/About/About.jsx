import React from "react";
import CountUp from "react-countup";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaHeart,
  FaClock,
  FaAward,
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Tilt from "react-parallax-tilt";
import myImage2 from "../../assets/my-image-2.jpg";
import ProgressBar from "@ramonak/react-progress-bar";

const skills = [
  { name: "React/Next.js", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "Tailwind", level: 90 },
  { name: "Firebase", level: 85 },
  { name: "MongoDB", level: 70 },
  { name: "Node.js", level: 70 },
  { name: "express.js", level: 50 },
  { name: "Github", level: 80 },
];

const stats = [
  { icon: <FaHeart />, value: 120, label: "Happy Clients" },
  { icon: <FaClock />, value: 4500, label: "Hours Worked" },
  { icon: <FaAward />, value: 6, label: "Projects Completed" },
];

const clients = [
  { name: "TechCorp", logo: "🖥️" },
  { name: "DesignHub", logo: "🎨" },
  { name: "WebCraft", logo: "🛠️" },
  { name: "AppVenture", logo: "📱" },
  { name: "TechSolutions", logo: "💻" },
  { name: "WebWonders", logo: "🌐" },
  { name: "PixelLabs", logo: "🧪" },
  { name: "NovaSoft", logo: "🚀" },
  { name: "CreativeNest", logo: "🎯" },
  { name: "DigitalEase", logo: "📊" },
];

const About = () => {
  return (
    <section className="bg-base-100 text-base-content py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-bold mb-10">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Profile Section */}
        <div className="bg-base-200 rounded-2xl p-10 mb-14 shadow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Tilt>
              <img
                src={myImage2}
                alt="Profile"
                className="rounded-2xl shadow-lg hover:scale-105 transition duration-300"
              />
            </Tilt>
            <div className="space-y-4">
              <p className="text-lg">
                Hello! I'm Sabbir Hossain, a dedicated front-end developer from
                Bangladesh with 1+ years of experience. My journey began in 2024
                when I created my first HTML page and was fascinated by how code
                shapes the web.
              </p>
              <p className="text-lg">
                 Now I build modern apps using React, Firebase, and Tailwind. I
                love solving real-world problems and sharing what I learn.
              </p>
              <p className="text-lg">
                Beyond coding, I enjoy cricket, reading, traveling, and quality
                time with friends.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com/in/sabbir-xd/" target="_blank" className="btn btn-sm btn-outline btn-primary rounded-full">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.facebook.com/sabbir.xd.f" target="_blank" className="btn btn-sm btn-outline btn-primary rounded-full">
                  <FaGithub />
                </a> 
                <a href="https://github.com/Sabbir-XD" target="_blank" className="btn btn-sm btn-outline btn-primary rounded-full">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-base-200 rounded-2xl p-10 mb-14 shadow">
          <h2 className="text-3xl font-bold mb-8">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <ProgressBar
                  completed={skill.level}
                  bgColor="#3B82F6" // Tailwind blue-500 hex
                  baseBgColor="#E5E7EB" // Tailwind gray-200 hex
                  height="12px"
                  borderRadius="8px"
                  isLabelVisible={false}
                  animateOnRender={true}
                  transitionDuration="1s"
                />
              </div>
            ))}
          </div>
        </div>


        {/* Stats */}
        <div className="bg-base-200 rounded-2xl p-10 mb-14 shadow">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-primary mb-3">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2 flex justify-center items-center gap-1">
                  <CountUp start={0} end={stat.value} duration={3} enableScrollSpy />
                  {index === 2 && <span>+</span>}
                </div>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div className="bg-base-200 rounded-2xl p-8 shadow">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span>Trusted By </span>
            <span className="text-primary">Clients</span>
          </h2>
          <Marquee speed={50} pauseOnHover className="py-2">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center w-28 h-28 mx-6 p-4 bg-base-100 rounded-xl shadow hover:scale-105 transition-transform"
              >
                <span className="text-4xl mb-1">{client.logo}</span>
                <p className="text-xs font-semibold text-center">{client.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default About;
