import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2,
  Eye,
  MessageCircle,
  Filter
} from 'lucide-react';

export default function AdminBlog() {
  const [selectedPosts, setSelectedPosts] = useState([]);
  
  const posts = [
    {
      id: 1,
      title: "L'avenir des prothèses myoélectriques en Afrique",
      author: "Ibrahim Mahamadou",
      category: "Innovation Médicale",
      status: "Publié",
      date: "15 Mars 2024",
      views: "1.2k",
      comments: 23,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Intelligence Artificielle dans le secteur médical nigérien",
      author: "Aïcha Souleymane",
      category: "Intelligence Artificielle",
      status: "Brouillon",
      date: "10 Mars 2024",
      views: "956",
      comments: 15,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80"
    }
  ];

  const handleSelectPost = (postId) => {
    setSelectedPosts(prev => 
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
          <p className="mt-1 text-gray-500">
            Gérez vos articles et publications
          </p>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700">
          <Plus className="h-5 w-5 mr-2" />
          Nouvel article
        </button>
      </div>

      {/* Filtres et recherche */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5 mr-2" />
              Filtres
            </button>
          </div>
        </div>
      </div>

      {/* Liste des articles */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedPosts(posts.map(p => p.id));
                      } else {
                        setSelectedPosts([]);
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Article
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Auteur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post, index) => (
                <motion.tr
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      checked={selectedPosts.includes(post.id)}
                      onChange={() => handleSelectPost(post.id)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-10 w-10 rounded-lg object-cover"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {post.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${post.status === 'Publié' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-3">
                      <button className="text-gray-600 hover:text-purple-600">
                        <Edit2 className="h-5 w-5" />
                      </button>
                      <button className="text-gray-600 hover:text-red-600">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}