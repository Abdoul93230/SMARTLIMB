import { Brain, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">SmartLimb</span>
            </div>
            <p className="mt-4 text-gray-400">
              Innovation technologique au service de l'humanité
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white">Produits</Link></li>
              <li><Link to="/research" className="text-gray-400 hover:text-white">Recherche</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Carrières</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Niamey, Niger</li>
              <li className="text-gray-400">abdoulrazak9212@gmail.com</li>
              <li className="text-gray-400">+227 87 72 75 01</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 SmartLimb. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
