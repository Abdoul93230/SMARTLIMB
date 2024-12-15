import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Eye, MessageCircle, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "L'avenir des prothèses myoélectriques en Afrique",
      excerpt: "Comment SmartLimb révolutionne l'accessibilité des prothèses avancées en développant des solutions innovantes adaptées aux besoins locaux...",
      author: "Ibrahim Mahamadou",
      date: "15 Mars 2024",
      readTime: "8 min",
      views: "1.2k",
      comments: 23,
      category: "Innovation Médicale",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Intelligence Artificielle dans le secteur médical nigérien",
      excerpt: "Les applications innovantes de l'IA pour améliorer les soins de santé et rendre les diagnostics plus accessibles dans les zones rurales...",
      author: "Aïcha Souleymane",
      date: "10 Mars 2024",
      readTime: "6 min",
      views: "956",
      comments: 15,
      category: "Intelligence Artificielle",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "CubeSat : La révolution spatiale au Niger",
      excerpt: "Notre projet de nanosatellite pour le développement agricole et la surveillance environnementale au service du développement durable...",
      author: "Moussa Issoufou",
      date: "5 Mars 2024",
      readTime: "10 min",
      views: "789",
      comments: 18,
      category: "Technologie Spatiale",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
    }
  ];

  const categories = [
    "Tous",
    "Innovation Médicale",
    "Intelligence Artificielle",
    "Technologie Spatiale",
    "Robotique"
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

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${index === 0 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-purple-50'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden mb-12"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="h-96 w-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  {posts[0].category}
                </span>
                <span className="mx-2">•</span>
                <span>{posts[0].readTime} de lecture</span>
              </div>
              <Link to={`/blog/${posts[0].id}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-purple-600">
                  {posts[0].title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-6"> <boltAction type="file" filePath="src/pages/Blog.jsx"></boltAction></p>
              <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                    alt={posts[0].author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{posts[0].author}</p>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{posts[0].date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{posts[0].views}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>{posts[0].comments}</span>
                  </div>
                  <Share2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} de lecture</span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                      alt={post.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="font-medium text-gray-900 text-sm">{post.author}</p>
                      <p className="text-gray-600 text-sm">{post.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-purple-600 rounded-xl shadow-xl p-8 mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Restez informé de nos dernières innovations
          </h2>
          <p className="text-purple-100 mb-6">
            Inscrivez-vous à notre newsletter pour recevoir nos actualités et mises à jour
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              S'inscrire
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}