import React from "react";

function Descritpion() {
  return (
    <section className="w-screen bg-gray-50 relative left-[49%] right-[50%] ml-[-50vw] mr-[-50vw] mt-60">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex gap-60">
          <div className="flex flex-col gap-6 md:w-1/4">
            <div className="flex items-center gap-2">
              <h2 className="text-emerald-500 text-2xl font-medium">Prêts</h2>
              <span className="text-emerald-500">→</span>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-gray-400 text-2xl font-medium">
                Affacturage
              </h2>
              <span className="text-gray-400">→</span>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:w-3/4">
            <p className="text-gray-600">
              Des taux compétitifs en quelques clics. Quel que soit votre
              projet, nous vous accompagnons de manière bienveillante avec les
              meilleurs outils en ligne. Oubliez le parcours du combattant, à
              vous le financement professionnel à court terme. Chez Liqtrade
              nous vous aidons à évoluer à travers des solutions de financement
              simples, efficaces et compétitives en seulement quelques clics.
            </p>

            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-medium">
                TPE/PME, comptez sur nous pour vous aider à :
              </h3>

              <ul>
                <li>Refinancer son entreprise</li>
                <li>Ouvrir une nouvelle agence</li>
                <li>Faire connaitre son entreprise</li>
                <li>Se lancer à l'international</li>
                <li>Digitaliser son entreprise</li>
                <li>Acquérir une entreprise</li>
                <li>Transformer son entreprise</li>
                <li>Financer des projets de développements durables</li>
              </ul>
            </div>

            <div className="flex  mt-8">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
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
