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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-sweet-progress/lib/style.css";
import Marquee from "react-fast-marquee";
import Tilt from "react-parallax-tilt";
import myImage2 from "../../assets/my-image-2.jpg";
import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  const theme = {
    primary: "#2563EB",
    secondary: "#1E40AF",
    accent: "#3B82F6",
    text: "#1F2937",
    lightText: "#6B7280",
    bg: "bg-gradient-to-br from-gray-50 to-white",
    card: "bg-white rounded-2xl shadow-xl",
    button: "bg-blue-600 hover:bg-blue-700 text-white",
  };

  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Frontend Development",
      description:
        "Building modern, responsive, and interactive UIs using React, Tailwind CSS, and JavaScript.",
      color: "text-blue-600",
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: "UI/UX Implementation",
      description:
        "Crafting visually appealing, user-friendly layouts with a focus on performance and accessibility.",
      color: "text-violet-600",
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Responsive Web Design",
      description:
        "Ensuring seamless experiences across all screen sizes with mobile-first design principles.",
      color: "text-green-600",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Firebase Integration",
      description:
        "Implementing authentication, Firestore, and storage to power secure and scalable web applications.",
      color: "text-yellow-500",
    },
  ];

  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "Sabbir delivered our dashboard project ahead of schedule. The UI was smooth, responsive, and exactly what we envisioned.",
      name: "Michael Chen",
      position: "CEO, TechSolutions Inc.",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "Working with Sabbir was a game-changer. Our website now loads faster and looks better on mobile — highly recommend him!",
      name: "Sarah Johnson",
      position: "Marketing Head, StyleHub",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      quote:
        "He integrated Firebase authentication and user profiles seamlessly into our platform. Very reliable and skilled developer.",
      name: "David Lee",
      position: "Product Manager, AppVenture",
      rating: 5,
    },
    {
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "Our WordPress site was completely transformed. The new design is clean, responsive, and easy to manage. Great work!",
      name: "Emily Carter",
      position: "Founder, DigitalEase",
      rating: 5,
    },
  ];

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
    { icon: <FaAward />, value: 16, label: "Projects Completed" },
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

  const responsive = {
    // For larger devices
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
      centerMode: true,
      centerSlidePercentage: 50,
    },
    // For medium devices
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
      centerMode: true,
      centerSlidePercentage: 80,
    },
    // For mobile devices
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
      centerMode: true,
      centerSlidePercentage: 100,
    },
  };

  return (
    <section className={`${theme.bg} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl text-center font-bold mb-10"
          style={{ color: theme.text }}
        >
          About <span style={{ color: theme.primary }}>Me</span>
        </h2>
        {/* profile section with image and description */}
        <div className={`${theme.card} p-10 mb-14`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Tilt>
              <img
                src={myImage2}
                alt="Profile"
                className="rounded-2xl shadow-lg hover:scale-105 transition duration-300"
              />
            </Tilt>
            <div>
              <p className="mb-4 text-lg" style={{ color: theme.lightText }}>
                Hello! I'm Sabbir Hossain, a dedicated front-end developer from
                Bangladesh with 1+ years of experience. My journey began in 2024
                when I created my first HTML page and was fascinated by how code
                shapes the web. I now build modern, responsive apps using React,
                Firebase, Tailwind CSS, and more.
              </p>
              <p className="mb-4 text-lg" style={{ color: theme.lightText }}>
                I love working on real-world problems, making interfaces
                intuitive, and staying updated with the latest tools. I'm also
                passionate about open-source and knowledge-sharing.
              </p>
              <p className="mb-6 text-lg" style={{ color: theme.lightText }}>
                Outside of coding, I enjoy playing cricket, traveling, reading
                books, and spending time with close friends. I believe balance
                fuels creativity.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-blue-100 p-3 rounded-full hover:bg-blue-200"
                  style={{ color: theme.primary }}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"
                  style={{ color: theme.text }}
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="bg-blue-100 p-3 rounded-full hover:bg-blue-200"
                  style={{ color: theme.primary }}
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* skills */}
        <div
          className={`${theme.card} p-10 mb-14 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg`}
        >
          <h2 className="text-3xl font-bold mb-8" style={{ color: theme.text }}>
            My <span style={{ color: theme.primary }}>Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between mb-2">
                  <span
                    className="font-medium transition-all duration-300 group-hover:text-blue-500"
                    style={{ color: theme.text }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="text-sm font-medium transition-all duration-300 group-hover:text-blue-500"
                    style={{ color: theme.lightText }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <ProgressBar
                  completed={skill.level}
                  bgColor={theme.primary}
                  baseBgColor={theme.cardBackground}
                  height="10px"
                  borderRadius="4px"
                  isLabelVisible={false}
                  animateOnRender={true}
                  transitionDuration="2s"
                  transitionTimingFunction="ease-in-out"
                  className="transition-all duration-500 hover:shadow-sm"
                />
                <style jsx>{`
                  .progressbar-wrapper {
                    overflow: hidden;
                  }
                  .progressbar-wrapper:hover .progressbar {
                    transform: scaleX(1.01);
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>

        {/* services */}
        <div className={`${theme.card} p-10 mb-14`}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: theme.text }}>
            My <span style={{ color: theme.primary }}>Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition"
              >
                <div className={`${service.color} mb-4`}>{service.icon}</div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: theme.text }}
                >
                  {service.title}
                </h3>
                <p style={{ color: theme.lightText }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* stats */}
        <div className={`${theme.card} p-10 mb-14`}>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3" style={{ color: theme.primary }}>
                  {stat.icon}
                </div>
                <div
                  className="text-5xl font-bold mb-2 flex items-center justify-center gap-1"
                  style={{ color: theme.text }}
                >
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyDelay={500}
                    redraw={true} // 👈 this is the key for re-animating on every scroll into view
                  />
                  {index === 2 && <span>+</span>}
                </div>
                <p style={{ color: theme.lightText }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* testimonials */}
        <div className={`${theme.card} p-10 mb-14`}>
          <h2
            className="text-3xl font-bold mb-6 text-center"
            style={{ color: theme.text }}
          >
            Client <span style={{ color: theme.primary }}>Testimonials</span>
          </h2>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            centerMode
            centerSlidePercentage={100} // Default for mobile (1 card)
            interval={3000}
            className="max-w-6xl mx-auto"
            responsive={{responsive}}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md px-8 py-6 mx-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-26 h-24 rounded-full object-cover border-4 border-blue-200 mb-4"
                />
                <p
                  className="italic text-lg text-center mb-4"
                  style={{ color: theme.text }}
                >
                  "{t.quote}"
                </p>
                <div
                  className="text-xl font-semibold"
                  style={{ color: theme.text }}
                >
                  {t.name}
                </div>
                <div
                  className="text-sm mb-2"
                  style={{ color: theme.lightText }}
                >
                  {t.position}
                </div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${
                        star < t.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* clients */}
        <div className={`${theme.card} p-8 rounded-2xl shadow-lg`}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span style={{ color: theme.text }}>Trusted By </span>
            <span style={{ color: theme.primary }}>Clients</span>
          </h2>
          <Marquee speed={50} pauseOnHover className="py-2">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center w-28 h-28 mx-6 p-4 bg-white rounded-xl shadow hover:scale-105 transition-transform"
              >
                <span className="text-4xl mb-1">{client.logo}</span>
                <p
                  className="text-xs font-semibold text-center"
                  style={{ color: theme.text }}
                >
                  {client.name}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default About;
