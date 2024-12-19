import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Check, 
  Shield, 
  Zap, 
  Award,
  Star,
  MessageCircle,
  ThumbsUp,
  Download
} from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  // Exemple de données produit (à remplacer par des données réelles)
  const product = {
    name: "SmartLimb Pro",
    tagline: "Prothèse myoélectrique de nouvelle génération",
    price: "Sur devis",
    description: "La SmartLimb Pro représente l'avenir des prothèses myoélectriques, combinant intelligence artificielle avancée et design ergonomique pour une expérience utilisateur optimale.",
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    ],
    features: [
      "Interface neuronale adaptative",
      "Retour haptique en temps réel",
      "Batterie longue durée (jusqu'à 18 heures)",
      "Design ergonomique personnalisable",
      "Résistant à l'eau (IP67)",
      "Garantie 2 ans"
    ],
    specifications: {
      "Poids": "350g",
      "Autonomie": "18 heures",
      "Temps de charge": "2 heures",
      "Matériaux": "Titane et composites avancés",
      "Certification": "CE Médical",
      "Garantie": "2 ans"
    },
    reviews: [
      {
        author: "Dr. Sarah Johnson",
        role: "Chirurgien orthopédique",
        rating: 5,
        comment: "Une avancée remarquable dans le domaine des prothèses. La précision et la réactivité sont impressionnantes.",
        date: "10 Mars 2024"
      },
      {
        author: "Marc Dubois",
        role: "Utilisateur",
        rating: 4,
        comment: "Très satisfait de la qualité et du confort. L'adaptation a été rapide grâce à l'interface intuitive.",
        date: "5 Mars 2024"
      }
    ],
    documents: [
      {
        name: "Guide d'utilisation",
        size: "2.5 MB",
        format: "PDF"
      },
      {
        name: "Spécifications techniques",
        size: "1.8 MB",
        format: "PDF"
      }
    ]
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Product Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-xl text-gray-600">{product.tagline}</p>
          </div>

          {/* Product Gallery and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Gallery */}
            <div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-purple-600' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">{product.price}</h2>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Disponible
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Caractéristiques principales</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* USPs */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                      <Shield className="w-6 h-6 text-purple-600 mr-3" />
                      <div>
                        <h4 className="font-medium">Certifié CE</h4>
                        <p className="text-sm text-gray-600">Normes médicales</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                      <Zap className="w-6 h-6 text-purple-600 mr-3" />
                      <div>
                        <h4 className="font-medium">Réactif</h4>
                        <p className="text-sm text-gray-600">Contrôle précis</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-4">
                    <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                      Demander un devis
                    </button>
                    <button className="w-full border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                      Contacter un expert
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="border-b border-gray-200">
              <nav className="flex">
                {['description', 'specifications', 'reviews', 'documents'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === tab
                        ? 'border-b-2 border-purple-600 text-purple-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="flex items-start">
                      <Shield className="w-12 h-12 text-purple-600 mr-4" />
                      <div>
                        <h3 className="font-semibold mb-2">Sécurité maximale</h3>
                        <p className="text-gray-600">Certifié selon les normes médicales les plus strictes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-12 h-12 text-purple-600 mr-4" />
                      <div>
                        <h3 className="font-semibold mb-2">Performance optimale</h3>
                        <p className="text-gray-600">Réactivité et précision exceptionnelles</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-12 h-12 text-purple-600 mr-4" />
                      <div>
                        <h3 className="font-semibold mb-2">Qualité premium</h3>
                        <p className="text-gray-600">Matériaux et finitions haut de gamme</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-200 pb-4">
                      <dt className="text-sm font-medium text-gray-500">{key}</dt>
                      <dd className="mt-1 text-lg text-gray-900">{value}</dd>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-8">
                  {product.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                        <span className="ml-4 text-gray-600">•</span>
                        <span className="ml-4 text-gray-600">{review.date}</span>
                      </div>
                      <p className="text-gray-900 mb-2">{review.comment}</p>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900">{review.author}</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-gray-600">{review.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'documents' && (
                <div className="space-y-4">
                  {product.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Download className="w-5 h-5 text-gray-500 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">{doc.name}</p>
                          <p className="text-sm text-gray-500">{doc.size} • {doc.format}</p>
                        </div>
                      </div>
                      <button className="text-purple-600 hover:text-purple-700">
                        Télécharger
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}