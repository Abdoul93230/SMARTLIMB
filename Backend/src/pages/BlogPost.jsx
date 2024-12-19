import { motion } from 'framer-motion';
import { Calendar, User, Share2, BookmarkPlus, ThumbsUp, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Exemple d'article (à remplacer par des données réelles)
  const post = {
    title: "L'avenir des prothèses myoélectriques en Afrique",
    author: "Ibrahim Mahamadou",
    date: "15 Mars 2024",
    readTime: "8 min",
    category: "Innovation Médicale",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    content: `
      <p class="mb-6">Les prothèses myoélectriques représentent une avancée majeure dans le domaine des technologies d'assistance. En Afrique, où l'accès à ces technologies reste limité, des entreprises comme SmartLimb ouvrent la voie à une nouvelle ère d'innovation et d'accessibilité.</p>

      <h2 class="text-2xl font-bold mb-4">L'innovation au service de l'accessibilité</h2>
      <p class="mb-6">Notre approche combine les dernières avancées en matière d'intelligence artificielle et de robotique pour créer des prothèses abordables et adaptées aux besoins locaux. Les signaux myoélectriques, captés à la surface de la peau, permettent un contrôle naturel et intuitif des prothèses.</p>

      <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80" alt="Prothèse en action" class="w-full h-96 object-cover rounded-lg mb-6"/>

      <h2 class="text-2xl font-bold mb-4">Impact social et économique</h2>
      <p class="mb-6">Au-delà de l'aspect technologique, notre mission vise à créer un impact social durable. En rendant ces technologies accessibles, nous contribuons à l'autonomie et à l'inclusion sociale des personnes amputées.</p>

      <blockquote class="border-l-4 border-purple-600 pl-4 italic my-6">
        "L'innovation n'a de sens que si elle est accessible à ceux qui en ont le plus besoin." - Dr. Ibrahim Mahamadou
      </blockquote>

      <h2 class="text-2xl font-bold mb-4">Perspectives d'avenir</h2>
      <p class="mb-6">Les développements futurs incluent l'intégration de capteurs plus sensibles, l'amélioration des algorithmes d'apprentissage et la personnalisation accrue des prothèses. Notre objectif est de créer un écosystème complet d'innovation médicale en Afrique.</p>
    `,
    relatedPosts: [
      {
        title: "Intelligence Artificielle dans le secteur médical nigérien",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80",
        author: "Aïcha Souleymane"
      },
      {
        title: "CubeSat : La révolution spatiale au Niger",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80",
        author: "Moussa Issoufou"
      }
    ]
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="mx-2">•</span>
              <span>{post.readTime} de lecture</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt={post.author}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-purple-600">
                  <Share2 className="w-6 h-6" />
                </button>
                <button 
                  className={`${isSaved ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
                  onClick={() => setIsSaved(!isSaved)}
                >
                  <BookmarkPlus className="w-6 h-6" />
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-xl mb-8"
          />

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Engagement Section */}
          <div className="border-t border-b border-gray-200 py-6 my-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  className={`flex items-center space-x-2 ${isLiked ? 'text-purple-600' : 'text-gray-600'}`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <ThumbsUp className="w-6 h-6" />
                  <span>{isLiked ? '124 likes' : '123 likes'}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600">
                  <MessageCircle className="w-6 h-6" />
                  <span>23 commentaires</span>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-purple-600">
                  <Share2 className="w-6 h-6" />
                </button>
                <button 
                  className={`${isSaved ? 'text-purple-600' : 'text-gray-600'} hover:text-purple-600`}
                  onClick={() => setIsSaved(!isSaved)}
                >
                  <BookmarkPlus className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-purple-50 rounded-xl p-6 my-8">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                alt={post.author}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-bold text-gray-900">{post.author}</h3>
                <p className="text-gray-600">Co-fondateur & Directeur Technique chez SmartLimb</p>
                <p className="text-gray-600 mt-2">
                  Expert en robotique et systèmes embarqués avec 5 ans d'expérience dans le développement de prothèses.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {post.relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{relatedPost.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <User className="w-4 h-4 mr-1" />
                      <span>{relatedPost.author}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}