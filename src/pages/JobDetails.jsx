import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function JobDetails() {
  const { id } = useParams(); // Récupérer l'ID du poste dans l'URL
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    message: '',
    cv: null
  });

  // Exemple de données pour les postes
  const positions = [
    {
      id: 1,
      title: "Ingénieur en Robotique",
      description: "Rejoignez notre équipe de R&D pour développer la prochaine génération de prothèses bioniques.",
      responsibilities: [
        "Concevoir et tester des prototypes de prothèses",
        "Collaborer avec les équipes de développement logiciel",
        "Optimiser les systèmes de contrôle neuronaux"
      ],
      requirements: [
        "Diplôme en ingénierie robotique ou domaine connexe",
        "Expérience en conception de systèmes robotiques",
        "Connaissances en programmation C++ et Python"
      ],
      qualifications: [
        "Master ou Doctorat en robotique",
        "Compétences en modélisation 3D et simulation"
      ],
      benefits: [
        "Salaire compétitif",
        "Formation continue",
        "Environnement de travail innovant"
      ]
    },
    {
      id: 2,
      title: "Développeur IA",
      description: "Travaillez sur les algorithmes d'apprentissage automatique pour améliorer le contrôle des prothèses.",
      responsibilities: [
        "Développer des modèles d'IA pour le contrôle des prothèses",
        "Optimiser les performances des algorithmes existants",
        "Collaborer avec l’équipe de R&D pour intégrer les systèmes IA"
      ],
      requirements: [
        "Master en informatique, IA ou domaine connexe",
        "Expérience avec TensorFlow, PyTorch",
        "Solides compétences en analyse de données et apprentissage supervisé"
      ],
      qualifications: [
        "Expérience dans le domaine des systèmes intelligents",
        "Capacité à résoudre des problèmes complexes et à travailler en équipe"
      ],
      benefits: [
        "Travail à distance flexible",
        "Accès à des conférences et ateliers sur l'IA"
      ]
    },
    {
      id: 3,
      title: "Ingénieur Biomédical",
      description: "Participez à la conception et aux tests des interfaces homme-machine pour nos prothèses.",
      responsibilities: [
        "Analyser et tester les interfaces biomédicales",
        "Assurer la conformité avec les normes médicales",
        "Travailler avec les équipes de développement pour améliorer l'intégration"
      ],
      requirements: [
        "Diplôme en ingénierie biomédicale",
        "Expérience en conception d'interfaces utilisateur",
        "Connaissance des normes médicales et des régulations"
      ],
      qualifications: [
        "Certifications en biomécanique ou ingénierie des dispositifs médicaux"
      ],
      benefits: [
        "Travail en équipe avec des experts du domaine",
        "Opportunités de développement professionnel"
      ]
    }
  ];

  const position = positions.find((p) => p.id === parseInt(id));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Candidature soumise !');
    setFormData({ name: '', email: '', phone: '', experience: '', skills: '', message: '', cv: null });
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">{position?.title}</h2>
          <p className="text-lg text-gray-600">{position?.description}</p>
        </div>

        <div className="space-y-12">
          {/* Responsabilités */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Responsabilités</h3>
            <div className="space-y-4">
              {position?.responsibilities.map((responsibility, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M9 16h6M9 8h6" />
                  </svg>
                  <p className="text-gray-600">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Exigences */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Exigences</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              {position?.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Qualifications</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              {position?.qualifications.map((qual, idx) => (
                <li key={idx}>{qual}</li>
              ))}
            </ul>
          </div>

          {/* Avantages */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Avantages</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              {position?.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Formulaire de candidature */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Postuler pour ce poste</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700">Téléphone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-gray-700">Expérience</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <div>
              <label htmlFor="skills" className="block text-gray-700">Compétences</label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <div>
              <label htmlFor="cv" className="block text-gray-700">Télécharger votre CV</label>
              <input
                id="cv"
                name="cv"
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700">Message de Motivation</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Soumettre ma candidature
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
