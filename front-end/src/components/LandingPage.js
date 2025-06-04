import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

function LandingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center py-16">
        <div>
          <p className="text-sm text-[#313a7d]  uppercase mb-4 font-bold ">
            FINANCEMENT PROFESSIONNEL À COURT TERME.
          </p>
          <h1 className="text-xl md:text-7xl font-bold mb-8">
            Notre intérêt,
            <br />
            c'est le vôtre.
          </h1>
          <p className="text-gray-600 mb-10">
            Simple, efficace et rapide. Profitez du service Liqtrade sans
            garantie personnelle.
          </p>
          <div className="flex gap-6">
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600">
              Se connecter
            </button>
            <button className="border-b-2 flex gap-3 border-green-500 text-emerald-500 px-6 py-3  hover:bg-emerald-50">
              S'inscrire
              <MoveRight />
            </button>
          </div>
        </div>
        <div className="relative h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/dashboard-preview.png"
              alt="Dashboard Preview"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute -z-10">
              <div className="absolute top-20 -left-10">
                <Image
                  src="/coin.png"
                  alt="Coin decoration"
                  width={80}
                  height={80}
                />
              </div>
              <div className="absolute bottom-20 right-0">
                <Image
                  src="/coin.png"
                  alt="Coin decoration"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
