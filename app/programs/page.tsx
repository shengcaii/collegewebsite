"use client"
import { motion } from 'framer-motion';

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Programs Section */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4 text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Programs
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We offer a diverse range of programs designed to empower our students and equip them with the skills necessary for success in their chosen fields.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Bachelor of Arts in Ethnic Studies</h2>
            <p className="text-gray-700">
              This program explores the cultures, languages, and histories of various ethnic groups in Myanmar, fostering appreciation and understanding.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Bachelor of Science in Education</h2>
            <p className="text-gray-700">
              Aimed at preparing future educators, this program combines theoretical knowledge with practical teaching experience.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Bachelor of Business Administration</h2>
            <p className="text-gray-700">
              This program provides a comprehensive understanding of business principles and practices, preparing students for various careers in the business world.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Bachelor of Arts in Community Development</h2>
            <p className="text-gray-700">
              Focused on social change and community empowerment, this program teaches students how to effectively engage and develop their communities.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
