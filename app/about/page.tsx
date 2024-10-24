"use client"
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4 text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The Nationalities Youth Resource Development Degree Colleges were established to cater to the educational needs of ethnic youth in Myanmar. Our mission is to empower students through quality education and cultural integration.
        </motion.p>

        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our mission is to provide quality education that not only imparts knowledge but also cultivates leadership and personal growth among our students, preparing them to contribute positively to their communities.
        </motion.p>

        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Our History
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Founded in 2000, the college has grown to serve thousands of students from various ethnic backgrounds, fostering a sense of unity and cultural appreciation. Our campuses in Yangon and Sagaing are equipped with state-of-the-art facilities to provide the best learning experience.
        </motion.p>

        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Join Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Become part of our vibrant community and embark on a journey of discovery, education, and empowerment. Together, let’s shape a brighter future for our ethnic youth.
        </motion.p>
      </section>
    </div>
  );
};

export default About;
