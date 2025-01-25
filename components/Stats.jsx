'use Client';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Award, Code2, Globe2 } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "100+",
    label: "Projects Completed",
  },
  {
    icon: Code2,
    value: "500K+",
    label: "Lines of Code",
  },
  {
    icon: Globe2,
    value: "15+",
    label: "Countries Served",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Geometric Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                  transition: { duration: 0.3 },
                }}
                className="text-center p-6 rounded-lg shadow-lg bg-gray-800/60 hover:bg-gray-700/80"
              >
                {/* Icon with Glow Effect */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-stellar-teal/10 shadow-lg hover:shadow-teal-500/50 transition-shadow duration-300">
                  <Icon className="w-8 h-8 text-stellar-teal" />
                </div>
                {/* Stat Value */}
                <div className="font-display font-bold text-5xl mb-2 text-white">
                  {stat.value}
                </div>
                {/* Stat Label */}
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
