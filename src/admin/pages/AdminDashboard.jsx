import { motion } from 'framer-motion';
import { 
  Users, 
  ShoppingBag, 
  FileText, 
  Briefcase,
  TrendingUp,
  Eye
} from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { name: 'Utilisateurs', value: '1,234', icon: Users, trend: '+12%' },
    { name: 'Produits', value: '12', icon: ShoppingBag, trend: '+2' },
    { name: 'Articles', value: '45', icon: FileText, trend: '+5' },
    { name: 'Candidatures', value: '89', icon: Briefcase, trend: '+15%' },
  ];

  const recentActivity = [
    {
      type: 'view',
      content: 'SmartLimb Pro a été consulté 25 fois',
      time: 'Il y a 5 minutes',
      icon: Eye
    },
    {
      type: 'application',
      content: 'Nouvelle candidature pour Ingénieur IA',
      time: 'Il y a 15 minutes',
      icon: Briefcase
    },
    {
      type: 'article',
      content: 'Nouvel article publié sur le blog',
      time: 'Il y a 1 heure',
      icon: FileText
    }
  ];

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-gray-500">
          Vue d'ensemble des statistiques et activités
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Icon className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">{stat.trend}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Activité récente */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Activité récente
        </h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => {
            const Icon = activity.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.content}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}