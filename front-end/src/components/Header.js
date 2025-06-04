import React from "react";
import Image from "../images/logoliqtrade.webp";

function Header() {
  return (
    <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-12">
        <div>
          <img src={Image} alt="Liqtrade" className="h-8" />
        </div>
        <div className="flex items-center gap-12">
          <h1 className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium">
            Prêt
          </h1>
          <h1 className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium">
            Affacturage
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-12">
        <h1 className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium">
          Simulateur
        </h1>
        <h1 className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium">
          Contact
        </h1>
        <h1 className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium">
          Publications
        </h1>
        <div className="flex gap-4">
          <h1 className="px-4 py-2 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50 cursor-pointer font-medium">
            S'inscrire
          </h1>
          <h1 className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 cursor-pointer font-medium">
            Se connecter
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
