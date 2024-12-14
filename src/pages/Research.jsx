import { motion } from 'framer-motion';
import { Microscope, Database, Satellite, Bot } from 'lucide-react';

export default function Research() {
  const areas = [
    {
      icon: <Microscope className="h-12 w-12 text-purple-600" />,
      title: "Prothèses Myoélectriques",
      description: "Développement de prothèses intelligentes utilisant les signaux musculaires pour un contrôle naturel et intuitif.",
      projects: [
        "Interface neuronale adaptative",
        "Système de retour haptique",
        "Optimisation de la batterie",
        "Personnalisation ergonomique"
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: "Intelligence Artificielle",
      description: "Applications de l'IA dans des secteurs clés pour stimuler le développement technologique au Niger.",
      projects: [
        "Diagnostic médical assisté par IA",
        "Systèmes bancaires intelligents",
        "Agriculture de précision",
        "Analyse prédictive pour l'industrie"
      ]
    },
    {
      icon: <Satellite className="h-12 w-12 text-purple-600" />,
      title: "Technologies Géospatiales",
      description: "Développement de solutions basées sur les satellites pour améliorer la gestion des ressources au Niger.",
      projects: [
        "CubeSat pour l'agriculture",
        "Surveillance environnementale en temps réel",
        "Télécommunications rurales",
        "Cartographie de haute précision"
      ]
    },
    {
      icon: <Bot className="h-12 w-12 text-purple-600" />,
      title: "Robotique et Automatisation",
      description: "Intégration de la robotique pour des applications industrielles et médicales.",
      projects: [
        "Prothèses robotisées assistées par IA",
        "Automatisation des systèmes de production",
        "Robotique en médecine de rééducation",
        "Développement de robots agricoles"
      ]
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
            Recherche et Innovation
          </h1>
          <p className="text-xl text-gray-600">
            À la pointe de la technologie pour un impact social durable
          </p>
        </motion.div>

        <div className="space-y-16">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {area.icon}
                  <h2 className="text-2xl font-bold text-gray-900 ml-4">{area.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {area.projects.map((project, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                    >
                      <Microscope className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="text-gray-800">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
