"use client"
import { motion } from 'framer-motion';

const eventsData = {
  upcoming: [
    {
      title: 'Annual Cultural Festival',
      date: 'November 20, 2024',
      description: 'A celebration of diversity with cultural performances, food stalls, and traditional games.',
    },
    {
      title: 'Guest Lecture Series: Innovations in Education',
      date: 'December 5, 2024',
      description: 'Join us for a series of enlightening talks by industry leaders and educators.',
    },
  ],
  previous: [
    {
      title: 'Community Development Workshop',
      date: 'October 10, 2024',
      description: 'A workshop focused on effective community engagement strategies.',
    },
    {
      title: 'Career Fair 2024',
      date: 'September 15, 2024',
      description: 'A fair connecting students with potential employers and internships.',
    },
  ],
};

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center py-10">
      <section className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4 text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upcoming Events
        </motion.h1>

        <div className="grid grid-cols-1 overflow-x-auto md:grid-cols-2 gap-8 mb-16">
          {eventsData.upcoming.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-blue-500 mb-2">{event.title}</h2>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.h1
          className="text-4xl font-bold mb-4 text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Previous Events
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsData.previous.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
            >
              <h2 className="text-2xl font-semibold text-blue-500 mb-2">{event.title}</h2>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
