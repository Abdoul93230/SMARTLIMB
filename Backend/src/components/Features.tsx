import React, { useState } from 'react';
import { Brain, Rocket, Heart, Cpu, Globe, Code } from 'lucide-react';

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: <Brain className="h-6 w-6" />,
      title: "Intelligence Artificielle",
      description: "Développement de solutions basées sur l'IA pour divers secteurs.",
      details: "SmartLimb conçoit et implémente des modèles d'IA pour résoudre des problématiques complexes dans la médecine, l'agriculture, les banques, et bien d'autres domaines. Nos solutions sont personnalisées pour répondre aux besoins spécifiques des entreprises.",
      image: "https://via.placeholder.com/400x300?text=Intelligence+Artificielle",
    },
    {
      id: 2,
      icon: <Cpu className="h-6 w-6" />,
      title: "Prothèses Bioniques",
      description: "Des prothèses myoélectriques avancées pour transformer des vies.",
      details: "Nous innovons dans la conception de prothèses légères, intuitives et alimentées par l'intelligence artificielle pour permettre aux personnes amputées de retrouver une autonomie fonctionnelle.",
      image: "https://via.placeholder.com/400x300?text=Prothèses+Bioniques",
    },
    {
      id: 3,
      icon: <Code className="h-6 w-6" />,
      title: "Solutions Logicielles",
      description: "Des applications sur mesure et des plateformes logicielles intégrées.",
      details: "Nous développons des applications mobiles et web, ainsi que des solutions *all-in-one* qui intègrent la gestion, l'automatisation et l'analyse, pour divers secteurs tels que l'éducation, le commerce et la santé.",
      image: "https://via.placeholder.com/400x300?text=Solutions+Logicielles",
    },
    {
      id: 4,
      icon: <Globe className="h-6 w-6" />,
      title: "Technologies Géospatiales",
      description: "Exploitation des nanosatellites pour un développement durable.",
      details: "Nous travaillons sur la conception, le lancement et l’exploitation de CubeSats pour des applications en agriculture de précision, surveillance environnementale, télécommunication et sécurité.",
      image: "https://via.placeholder.com/400x300?text=Technologies+Géospatiales",
    },
    {
      id: 5,
      icon: <Rocket className="h-6 w-6" />,
      title: "Recherche et Développement",
      description: "Une innovation continue au cœur de notre démarche.",
      details: "Notre équipe explore les dernières avancées technologiques en robotique, IA et logiciels pour maintenir une longueur d’avance et offrir des solutions toujours plus performantes.",
      image: "https://via.placeholder.com/400x300?text=Recherche+et+Développement",
    },
    {
      id: 6,
      icon: <Heart className="h-6 w-6" />,
      title: "Impact Social",
      description: "Soutenir les communautés et améliorer leur quotidien.",
      details: "Nous nous engageons à rendre nos technologies accessibles, avec une attention particulière aux besoins des populations locales, en favorisant l'inclusion et le développement durable.",
      image: "https://via.placeholder.com/400x300?text=Impact+Social",
    },
  ];

  const handleModalClose = () => setSelectedFeature(null);

  return (
    <div className="py-24 bg-gray-50" id="innovations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Domaines d'Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            <span className="text-purple-600 font-semibold">SmartLimb</span> s'engage à transformer les industries avec des solutions innovantes et durables.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedFeature(feature)}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white group-hover:bg-purple-700">
                {feature.icon}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <img
              src={selectedFeature.image}
              alt={selectedFeature.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900">{selectedFeature.title}</h3>
            <p className="mt-4 text-gray-600">{selectedFeature.details}</p>
            <button
              className="mt-6 w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700"
              onClick={handleModalClose}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
