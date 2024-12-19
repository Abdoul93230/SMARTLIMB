import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-90" />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80"
          alt="Advanced Technology"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center" style={{ marginTop: 200 }}>
          {/* Title */}
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Redéfinir l'Accessibilité</span>
            <span className="block text-purple-300">Grâce à l'Innovation</span>
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Chez <span className="text-purple-400 font-semibold">SmartLimb</span>, nous concevons des prothèses bioniques
            myoélectriques et développons des solutions technologiques intégrant l'intelligence artificielle
            pour améliorer la qualité de vie et promouvoir le progrès au Niger et à travers le monde.
          </p>

          {/* Call to Action */}
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/products"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
              >
                Explorer nos innovations
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
