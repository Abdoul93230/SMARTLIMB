import React from 'react';

export function About() {
  return (
    <div className="bg-gray-50 py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Notre Histoire
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Fondée en 2023 par trois étudiants visionnaires de l'African Development University,
              SmartLimb incarne l'innovation africaine dans le domaine des technologies médicales.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                    2023
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Fondation</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Création de SmartLimb avec une vision claire : rendre les prothèses bioniques accessibles.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                    2024
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Premier Prototype</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Développement de notre première prothèse myoélectrique innovante.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                    2026
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Vision Future</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Objectif de devenir une référence mondiale dans les prothèses bioniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://www.msdconnect.fr/wp-content/uploads/sites/21/2023/01/shutterstock_2168885773-e1677861290922.jpg"
              alt="Innovation médicale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
