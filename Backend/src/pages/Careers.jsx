import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Careers() {
  const positions = [
    {
      title: "Ingénieur en Robotique",
      type: "Stage/CDI",
      location: "Niamey, Niger",
      description: "Rejoignez notre équipe de R&D pour développer la prochaine génération de prothèses bioniques."
    },
    {
      title: "Développeur IA",
      type: "Stage/CDI",
      location: "Niamey, Niger",
      description: "Travaillez sur les algorithmes d'apprentissage automatique pour améliorer le contrôle des prothèses."
    },
    {
      title: "Ingénieur Biomédical",
      type: "Stage",
      location: "Niamey, Niger",
      description: "Participez à la conception et aux tests des interfaces homme-machine pour nos prothèses."
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
            Rejoignez l'Innovation
          </h1>
          <p className="text-xl text-gray-600">
            Construisez l'avenir de la technologie médicale avec nous
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Briefcase className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Opportunités de Carrière</h3>
            <p className="text-gray-600">
              Des postes passionnants dans la robotique, l'IA et l'ingénierie biomédicale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <GraduationCap className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Programme de Stage</h3>
            <p className="text-gray-600">
              Formez-vous auprès des meilleurs experts en technologies médicales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Culture d'Entreprise</h3>
            <p className="text-gray-600">
              Un environnement innovant, collaboratif et axé sur l'impact social.
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-12">Postes Ouverts</h2>
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                  <p className="text-purple-600 mt-1">{position.type}</p>
                  <p className="text-gray-500 mt-1">{position.location}</p>
                  <p className="text-gray-600 mt-4">{position.description}</p>
                </div>
                <Link to={`/job/${+index+1}`}>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Postuler
                </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
