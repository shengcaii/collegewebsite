"use client"
import { motion } from 'framer-motion';
import Menu from './menu';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 w-400">
            {/* Nav Section */}
            <Menu/>
            {/* Hero Section */}
            <section
                className="relative w-full h-screen text-white"
                style={{ backgroundImage: "url('/background.jpg')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <motion.div
                    className="relative z-10 flex flex-col items-center justify-center h-full space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <h1 className="text-6xl font-bold">Empowering Ethnic Youth</h1>
                    <p className="text-lg text-center max-w-2xl">
                        Join us at the Nationalities Youth Resource Development Degree Colleges, where education, culture, and empowerment meet.
                    </p>
                    <motion.button
                        className="px-8 py-3 bg-blue-600 text-white rounded-md font-semibold shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="py-16 px-6 bg-white text-gray-800 text-center">
                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Our College
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Established in 2000, the Nationalities Youth Resource Development Degree Colleges were created to address the educational needs of ethnic youth in Myanmar. Our campuses in Yangon and Sagaing offer cutting-edge facilities and programs designed to foster leadership and technical skills for the future.
                </motion.p>
            </section>

            {/* Programs Section */}
            <section className="py-16 px-6 bg-gray-50 text-gray-800">
                <motion.h2
                    className="text-4xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Programs
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Program 1 */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-2">A.G.T.I Diploma</h3>
                        <p className="text-gray-600">
                            A comprehensive technical education program that equips students with engineering and technical skills.
                        </p>
                    </motion.div>

                    {/* Program 2 */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold mb-2">Bachelor&#8216;s Degrees</h3>
                        <p className="text-gray-600">
                            Bachelor&#8216;s programs in Engineering, Business Administration, and more to help students achieve academic excellence.
                        </p>
                    </motion.div>

                    {/* Program 3 */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold mb-2">Vocational Training</h3>
                        <p className="text-gray-600">
                            Short-term training programs designed to provide practical skills for immediate employment in various industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-6 bg-blue-600 text-white text-center">
                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Whether you have questions or want to learn more about our programs, feel free to contact us.
                </motion.p>
                <motion.button
                    className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact Us
                </motion.button>
            </section>
        </div>
    );
};

export default Home;
