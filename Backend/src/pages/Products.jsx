import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "SmartLimb Pro",
      description: "Prothèse myoélectrique avancée avec contrôle neuronal et IA embarquée.",
      features: [
        "Interface neuronale adaptative",
        "Retour haptique en temps réel",
        "Batterie longue durée",
        "Design ergonomique personnalisable"
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      category: "Premium"
    },
    {
      id: 2,
      name: "SmartLimb Lite",
      description: "Solution abordable pour la mobilité retrouvée avec un contrôle intuitif.",
      features: [
        "Contrôle intuitif",
        "Léger et durable",
        "Installation rapide",
        "Prix abordable"
      ],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80",
      category: "Standard"
    },
    {
      id: 3,
      name: "SmartLimb Software Suite",
      description: "Une plateforme tout-en-un pour la gestion et l'optimisation des prothèses.",
      features: [
        "Interface utilisateur simple",
        "Suivi des performances",
        "Intégration IA",
        "Multi-plateformes"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      category: "Software"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Solutions Innovantes
          </h1>
          <p className="text-xl text-gray-600">
            Des produits avancés combinant prothèses bioniques, IA, et logiciels
          </p>
        </motion.div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Cpu className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">IA Embarquée</h3>
            <p className="text-gray-600">
              Des algorithmes d'apprentissage adaptatifs pour un contrôle naturel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Zap className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Réactivité et Précision</h3>
            <p className="text-gray-600">
              Réponse ultra-rapide pour des mouvements fluides.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Shield className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fiabilité et Sécurité</h3>
            <p className="text-gray-600">
              Des solutions robustes avec suivi en temps réel.
            </p>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/product/${product.id}`}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-purple-600 rounded-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">
            Prêt à découvrir nos solutions ?
          </h2>
          <p className="mb-6">
            Contactez-nous pour une démonstration personnalisée
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
            Demander une démo
          </button>
        </motion.div>
      </div>
    </div>
  );
}