import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "L'avenir des prothèses myoélectriques en Afrique",
      excerpt: "Comment SmartLimb révolutionne l'accessibilité des prothèses avancées...",
      author: "Ibrahim Mahamadou",
      date: "15 Mars 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    },
    {
      title: "Intelligence Artificielle dans le secteur médical nigérien",
      excerpt: "Les applications innovantes de l'IA pour améliorer les soins de santé...",
      author: "Aïcha Souleymane",
      date: "10 Mars 2024",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80"
    },
    {
      title: "CubeSat : La révolution spatiale au Niger",
      excerpt: "Notre projet de nanosatellite pour le développement agricole...",
      author: "Moussa Issoufou",
      date: "5 Mars 2024",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
    },
    {
      title: "L'avenir des prothèses myoélectriques en Afrique",
      excerpt: "Comment SmartLimb révolutionne l'accessibilité des prothèses avancées...",
      author: "Ibrahim Mahamadou",
      date: "15 Mars 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    },
    {
      title: "Intelligence Artificielle dans le secteur médical nigérien",
      excerpt: "Les applications innovantes de l'IA pour améliorer les soins de santé...",
      author: "Aïcha Souleymane",
      date: "10 Mars 2024",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80"
    },
    {
      title: "CubeSat : La révolution spatiale au Niger",
      excerpt: "Notre projet de nanosatellite pour le développement agricole...",
      author: "Moussa Issoufou",
      date: "5 Mars 2024",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Actualités
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez nos dernières innovations et actualités
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                  <Calendar className="h-4 w-4 ml-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <button className="flex items-center text-purple-600 hover:text-purple-700">
                  Lire la suite
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
