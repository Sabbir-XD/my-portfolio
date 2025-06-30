import { useState } from "react";
import { FaSearch, FaCalendarAlt, FaTags, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Mastering React Hooks in 2023",
      excerpt:
        "Learn how to leverage modern React hooks to build cleaner, more efficient components.",
      date: "May 15, 2023",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Frontend", "Hooks"],
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "The Complete Guide to CSS Grid",
      excerpt:
        "Everything you need to know to create complex layouts with CSS Grid.",
      date: "April 2, 2023",
      readTime: "10 min read",
      category: "Tailwind",
      tags: ["CSS", "Design", "Layout"],
      image:
        "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Building Scalable Node.js APIs",
      excerpt:
        "Best practices for creating maintainable and scalable backend services with Node.js.",
      date: "March 18, 2023",
      readTime: "12 min read",
      category: "React",
      tags: ["Backend", "JavaScript", "API"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "State Management with Zustand",
      excerpt:
        "Why Zustand might be the perfect state management solution for your next project.",
      date: "February 5, 2023",
      readTime: "6 min read",
      category: "React",
      tags: ["React", "State Management", "Zustand"],
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "State Management with Zustand",
      excerpt:
        "Why Zustand might be the perfect state management solution for your next project.",
      date: "February 5, 2023",
      readTime: "6 min read",
      category: "Mongodb",
      tags: ["React", "State Management", "Backend"],
      image: "https://i.ibb.co/DDtWMbVB/SAVOY-SPOON.png",
    },
    {
        id: 6,
        title: "State Management with Zustand",
        excerpt:
          "Why Zustand might be the perfect state management solution for your next project.",
        date: "February 5, 2023",
        readTime: "6 min read",
        category: "Mongodb",
        tags: ["React", "State Management", "Zustand"],
        image: "https://i.ibb.co/PdVSR94/coffee.png",
      },
  ];

  const categories = ["All", "React", "Tailwind", "Node.js", "Mongodb",];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            My <span className="text-blue-600">Blog</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge and insights about web development, design, and
            tech trends.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-4 text-gray-400" />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.some((post) => post.featured) && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Featured Post
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {blogPosts
                .filter((post) => post.featured)
                .map((featuredPost) => (
                  <div key={featuredPost.id} className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-1/2">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mr-3">
                          {featuredPost.category}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <FaCalendarAlt className="mr-1" /> {featuredPost.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                        Read full article <FaArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>
        )}

        {/* All Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center">
                      <FaCalendarAlt className="mr-1" /> {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                    Read more <FaArrowRight className="ml-1 text-xs" />
                  </button>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No articles found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
