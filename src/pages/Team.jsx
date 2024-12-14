import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: "Dr. Ibrahim Mahamadou",
      role: "Co-fondateur & Directeur Technique",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "Expert en robotique et systèmes embarqués avec 5 ans d'expérience dans le développement de prothèses.",
      social: {
        linkedin: "#",
        github: "#",
        email: "ibrahim@smartlimb.com"
      }
    },
    {
      name: "Aïcha Souleymane",
      role: "Co-fondatrice & Directrice IA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      bio: "Spécialiste en intelligence artificielle, passionnée par l'application de l'IA dans le domaine médical.",
      social: {
        linkedin: "#",
        github: "#",
        email: "aicha@smartlimb.com"
      }
    },
    {
      name: "Moussa Issoufou",
      role: "Co-fondateur & Directeur Innovation",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80",
      bio: "Visionnaire technologique avec une expertise en développement de produits innovants.",
      social: {
        linkedin: "#",
        github: "#",
        email: "moussa@smartlimb.com"
      }
    },
    {
      name: "Dr. Ibrahim Mahamadou",
      role: "Co-fondateur & Directeur Technique",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "Expert en robotique et systèmes embarqués avec 5 ans d'expérience dans le développement de prothèses.",
      social: {
        linkedin: "#",
        github: "#",
        email: "ibrahim@smartlimb.com"
      }
    },
    {
      name: "Aïcha Souleymane",
      role: "Co-fondatrice & Directrice IA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      bio: "Spécialiste en intelligence artificielle, passionnée par l'application de l'IA dans le domaine médical.",
      social: {
        linkedin: "#",
        github: "#",
        email: "aicha@smartlimb.com"
      }
    },
    {
      name: "Moussa Issoufou",
      role: "Co-fondateur & Directeur Innovation",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80",
      bio: "Visionnaire technologique avec une expertise en développement de produits innovants.",
      social: {
        linkedin: "#",
        github: "#",
        email: "moussa@smartlimb.com"
      }
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Notre Équipe
          </h1>
          <p className="text-xl text-gray-600">
            Des experts passionnés par l'innovation et l'impact social
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transform hover:scale-110 transition-all duration-300"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{member.name}</h2>
                <p className="text-purple-600 mt-1">{member.role}</p>
                <p className="text-gray-600 mt-4">{member.bio}</p>
                <div className="flex space-x-6 mt-6">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
