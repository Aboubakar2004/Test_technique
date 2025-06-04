import React from "react";
import Image from "next/image";
import Phone from "../images/phone.png";
import { MoveRight } from "lucide-react";

function LandingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center py-8 md:py-16">
        <div className="text-center md:text-left">
          <p className="text-sm text-[#313a7d] uppercase mb-3 md:mb-4 font-bold">
            FINANCEMENT PROFESSIONNEL À COURT TERME.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
            Notre intérêt,
            <br />
            c&apos;est le vôtre.
          </h1>
          <p className="text-gray-600 mb-8 md:mb-10 text-base sm:text-lg">
            Simple, efficace et rapide. Profitez du service Liqtrade sans
            garantie personnelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <button className="bg-emerald-500 text-white px-4 sm:px-6 py-3 rounded-md hover:bg-emerald-600 text-sm sm:text-base">
              Se connecter
            </button>
            <button className="border-b-2 flex items-center justify-center sm:justify-start gap-2 sm:gap-3 border-green-500 text-emerald-500 px-4 sm:px-6 py-3 hover:bg-emerald-50 text-sm sm:text-base">
              S&apos;inscrire
              <MoveRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px] mt-8 md:mt-0">
          <div className="absolute inset-0 flex justify-center md:justify-end">
            <div className="relative w-full">
              <Image
                src={Phone}
                alt="Dashboard Preview"
                fill
                className="object-contain scale-100 sm:scale-125 md:scale-150 lg:scale-[1.75] translate-x-0 md:translate-x-16 lg:translate-x-36"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
