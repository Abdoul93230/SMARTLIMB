import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-white py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Intéressé par nos solutions ? Nous sommes là pour vous aider.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Mail className="h-8 w-8 text-purple-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-500">abdoulrazak9212@gmail.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Phone className="h-8 w-8 text-purple-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Téléphone</h3>
              <p className="mt-2 text-base text-gray-500">+227 87 72 75 01</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-8 w-8 text-purple-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Adresse</h3>
              <p className="mt-2 text-base text-gray-500">Niamey, Niger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
