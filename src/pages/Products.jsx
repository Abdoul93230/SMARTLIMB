import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Code, Globe } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: "SmartLimb Pro",
      description: "Prothèse myoélectrique avancée avec contrôle neuronal et IA embarquée.",
      features: [
        "Interface neuronale adaptative",
        "Retour haptique en temps réel",
        "Batterie longue durée",
        "Design ergonomique personnalisable"
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
    },
    {
      name: "SmartLimb Lite",
      description: "Solution abordable pour la mobilité retrouvée avec un contrôle intuitif.",
      features: [
        "Contrôle intuitif",
        "Léger et durable",
        "Installation rapide",
        "Prix abordable"
      ],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80"
    },
    {
      name: "SmartLimb Software Suite",
      description: "Une plateforme tout-en-un pour la gestion et l'optimisation des prothèses et applications.",
      features: [
        "Interface utilisateur simple",
        "Suivi des performances des prothèses",
        "Intégration IA pour analyse avancée",
        "Compatible avec diverses plateformes"
      ],
      image: "https://via.placeholder.com/400x300?text=Software+Suite"
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
            Des produits avancés combinant prothèses bioniques, IA, et logiciels pour une mobilité et un confort accrus.
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
              Des algorithmes d'apprentissage adaptatifs pour un contrôle naturel et fluide des prothèses.
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
              Réponse ultra-rapide pour des mouvements fluides et une expérience utilisateur optimisée.
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
              Des solutions robustes et sécurisées pour un usage quotidien avec un suivi en temps réel.
            </p>
          </motion.div>
        </div>

        {/* Product Grid */}
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="mb-16 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
