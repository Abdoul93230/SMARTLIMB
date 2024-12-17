import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Globe, Mail, Bell, Shield } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

export default function AdminSettings() {
  const { settings, updateSettings } = useAdmin();
  const [formData, setFormData] = useState(settings);

  const handleChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(formData);
    alert('Paramètres mis à jour avec succès !');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* En-tête */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
        <p className="mt-1 text-gray-500">
          Gérez les paramètres de votre site
        </p>
      </div>

      {/* Sections de paramètres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Paramètres généraux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center mb-6">
            <Globe className="h-6 w-6 text-purple-600" />
            <h2 className="ml-3 text-lg font-medium text-gray-900">Général</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom du site
              </label>
              <input
                type="text"
                value={formData.general.siteName}
                onChange={(e) => handleChange('general', 'siteName', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                rows="3"
                value={formData.general.description}
                onChange={(e) => handleChange('general', 'description', e.target .target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Langue par défaut
              </label>
              <select 
                value={formData.general.language}
                onChange={(e) => handleChange('general', 'language', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option value="Français">Français</option>
                <option value="English">English</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Paramètres de contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center mb-6">
            <Mail className="h-6 w-6 text-purple-600" />
            <h2 className="ml-3 text-lg font-medium text-gray-900">Contact</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email de contact
              </label>
              <input
                type="email"
                value={formData.contact.email}
                onChange={(e) => handleChange('contact', 'email', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <input
                type="tel"
                value={formData.contact.phone}
                onChange={(e) => handleChange('contact', 'phone', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adresse
              </label>
              <textarea
                rows="3"
                value={formData.contact.address}
                onChange={(e) => handleChange('contact', 'address', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Paramètres de notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center mb-6">
            <Bell className="h-6 w-6 text-purple-600" />
            <h2 className="ml-3 text-lg font-medium text-gray-900">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="flex-grow flex flex-col">
                <span className="text-sm font-medium text-gray-900">Nouvelles candidatures</span>
                <span className="text-sm text-gray-500">Recevoir une notification pour chaque nouvelle candidature</span>
              </span>
              <button
                type="button"
                className={`${
                  formData.notifications.newApplications ? 'bg-purple-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
                onClick={() => handleChange('notifications', 'newApplications', !formData.notifications.newApplications)}
              >
                <span 
                  className={`${
                    formData.notifications.newApplications ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex-grow flex flex-col">
                <span className="text-sm font-medium text-gray-900">Nouveaux commentaires</span>
                <span className="text-sm text-gray-500">Recevoir une notification pour les nouveaux commentaires</span>
              </span>
              <button
                type="button"
                className={`${
                  formData.notifications.newComments ? 'bg-purple-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
                onClick={() => handleChange('notifications', 'newComments', !formData.notifications.newComments)}
              >
                <span 
                  className={`${
                    formData.notifications.newComments ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Paramètres de sécurité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-purple-600" />
            <h2 className="ml-3 text-lg font-medium text-gray-900">Sécurité</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ancien mot de passe
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bouton de sauvegarde */}
      <div className="flex justify-end">
        <button 
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center hover:bg-purple-700"
        >
          <Save className="h-5 w-5 mr-2" />
          Sauvegarder les modifications
        </button>
      </div>
    </form>
  );
}