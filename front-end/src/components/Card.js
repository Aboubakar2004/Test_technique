import {
  CheckCircle2,
  CircleDollarSign,
  Clock,
  MessageCircleQuestion,
  Settings,
} from "lucide-react";
import React from "react";
import Link from "next/link";

function Card() {
  return (
    <div className="mt-28 mb-28">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-8 border border-gray-200 rounded-lg shadow shadow-gray-200 h-[250px]">
          <div className="bg-[#d5f5e5] p-2 rounded-lg w-fit mb-4">
            <CheckCircle2 className="text-[#31cf83] w-6 h-6" />
          </div>
          <h1 className="text-xl font-semibold mb-4">
            Evaluation du profil de risque de votre client
          </h1>
          <p className="text-gray-600">
            Plus de mauvaises surprises lors de la facturation de votre client.
            Chez Liqtrade, nous évaluons son risque débiteur afin de permettre
            la valorisation et l&apos;acceptation rapide de votre facture.
          </p>
        </div>

        <div className="p-8 border border-gray-200 rounded-lg shadow shadow-gray-200 h-[250px]">
          <div className="bg-[#f1f2fc] p-2 rounded-lg w-fit mb-4">
            <CircleDollarSign className="text-[#d5d8f0] w-6 h-6" />
          </div>
          <h1 className="text-xl font-semibold mb-4">
            Meilleur prix de cession de votre créance
          </h1>
          <p className="text-gray-600">
            Nos algorithmes trouvent pour vous la meilleure offre de financement
            en termes de prix et de taux de commission. En moyenne, nos clients
            perçoivent jusqu&apos;à 97 % de la valeur nominale de leur facture.
          </p>
        </div>

        <div className="p-8 border border-gray-200 rounded-lg shadow shadow-gray-200 h-[250px]">
          <div className="bg-[#c2e9f1] p-2 rounded-lg w-fit mb-4">
            <Clock className="text-[#59c5d9] w-6 h-6" />
          </div>
          <h1 className="text-xl font-semibold mb-4">
            Paiement en un temps record pour vos factures
          </h1>
          <p className="text-gray-600">
            Après validation et financement de votre facture, votre paiement est
            transféré en seulement quelques minutes. Grâce à notre plateforme de
            paiement, bénéficiez de nouvelles fonctionnalités de paiement
            instantané.
          </p>
        </div>

        <div className="p-8 border border-gray-200 rounded-lg shadow shadow-gray-200 h-[250px]">
          <div className="bg-[#f9dcc0] p-2 rounded-lg w-fit mb-4">
            <MessageCircleQuestion className="text-[#ec9136] w-6 h-6" />
          </div>
          <h1 className="text-xl font-semibold mb-4">
            Financez vos besoins de trésorerie en temps réel
          </h1>
          <p className="text-gray-600">
            Faites une demande de financement en ligne via l&apos;envoi
            électronique de facture et obtenez plus rapidement vos fonds via un
            traitement automatisé de vos demandes.
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          href="/backoffice"
          className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors group rounded-md hover:bg-gray-50"
        >
          <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          <span className="text-sm">Backoffice</span>
        </Link>
      </div>
    </div>
  );
}

export default Card;
