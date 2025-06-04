import React from "react";
import { ArrowRight } from "lucide-react";

function Descritpion() {
  return (
    <section className="w-screen bg-gray-50 relative left-[49%] right-[50%] ml-[-50vw] mr-[-50vw] mt-20 sm:mt-40 lg:mt-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-60">
          <div className="flex lg:flex-col gap-4 lg:gap-6 lg:w-1/4">
            <div className="flex items-center gap-2 cursor-pointer group">
              <h2 className="text-emerald-500 text-lg sm:text-xl lg:text-2xl font-medium group-hover:translate-x-1 transition-transform">
                Prêts
              </h2>
              <ArrowRight className="text-emerald-500 w-5 h-5" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <h2 className="text-gray-400 text-lg sm:text-xl lg:text-2xl font-medium group-hover:translate-x-1 transition-transform">
                Affacturage
              </h2>
              <ArrowRight className="text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:w-3/4">
            <p className="text-gray-600 text-base sm:text-lg">
              Des taux compétitifs en quelques clics. Quel que soit votre
              projet, nous vous accompagnons de manière bienveillante avec les
              meilleurs outils en ligne. Oubliez le parcours du combattant, à
              vous le financement professionnel à court terme. Chez Liqtrade
              nous vous aidons à évoluer à travers des solutions de financement
              simples, efficaces et compétitives en seulement quelques clics.
            </p>

            <div className="flex flex-col gap-6">
              <h3 className="text-lg sm:text-xl font-medium">
                TPE/PME, comptez sur nous pour vous aider à :
              </h3>

              <ul className="grid sm:grid-cols-2 gap-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  Refinancer son entreprise
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  Ouvrir une nouvelle agence
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  Faire connaitre son entreprise
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  Se lancer à l&apos;international
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  Digitaliser son entreprise
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  Acquérir une entreprise
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  Transformer son entreprise
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  Financer des projets de développements durables
                </li>
              </ul>
            </div>

            <div className="flex justify-center sm:justify-start mt-4 sm:mt-8">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 text-sm sm:text-base">
                Vidéo de présentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Descritpion;
