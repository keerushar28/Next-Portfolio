'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    link: "#"
  },
  {
    title: "FinTech Dashboard",
    description: "Real-time financial analytics dashboard with advanced data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280",
    tags: ["TypeScript", "D3.js", "AWS"],
    link: "#"
  },
  {
    title: "Healthcare App",
    description: "Telemedicine platform connecting patients with healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1280",
    tags: ["React Native", "Firebase", "HIPAA"],
    link: "#"
  }
];

const ProjectCard = ({ project, index, hoverIndex, setHoverIndex }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className={`group relative overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-500 ${hoverIndex === index ? 'scale-110 z-10' : 'scale-100'}`}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(-1)}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoverIndex === index ? 'opacity-100' : ''}`} />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-[70%] group-hover:translate-y-0 transition-transform duration-700">
        <motion.div
          className="bg-black/70 backdrop-blur-lg rounded-2xl p-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-3 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-gradient-to-r from-stellar-teal to-stellar-blue text-white rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a
              href={project.link}
              className="flex items-center text-stellar-teal hover:text-stellar-teal-dark transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
            <a
              href="#"
              className="flex items-center text-stellar-teal hover:text-stellar-teal-dark transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              Source Code
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FeaturedWork = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-stellar-dark via-stellar-darker to-black relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Latest Creations</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Browse our portfolio of cutting-edge projects designed to redefine digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              hoverIndex={hoverIndex}
              setHoverIndex={setHoverIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
