"use client";

import React, { useState } from "react";
import { Pen } from "lucide-react";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Trophy from "../images/Trophy.png";
import { Clock9 } from "lucide-react";
import { Download } from "lucide-react";

function Transaction() {
  const [activeTab, setActiveTab] = useState("Actifs");
  const [checkedSteps, setCheckedSteps] = useState({
    accordOuverture: true,
    accordDemande: true,
    evaluationRisques: false,
  });

  const handleCheckStep = (step) => {
    setCheckedSteps((prev) => ({
      ...prev,
      [step]: !prev[step],
    }));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mt-14">Transaction</h1>
      <div className="inline-flex p-1 bg-gray-100 rounded-lg mt-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab("Actifs")}
          className={`px-4 lg:px-6 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeTab === "Actifs"
              ? "bg-green-500 text-white font-medium"
              : "text-gray-500"
          }`}
        >
          Actifs
        </button>
        <button
          onClick={() => setActiveTab("EnAttente")}
          className={`px-4 lg:px-6 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeTab === "EnAttente"
              ? "bg-green-500 text-white font-medium"
              : "text-gray-500"
          }`}
        >
          En attente (1)
        </button>
        <button
          onClick={() => setActiveTab("Clos")}
          className={`px-4 lg:px-6 py-2 rounded-lg transition-all whitespace-nowrap ${
            activeTab === "Clos"
              ? "bg-green-500 text-white font-medium"
              : "text-gray-500"
          }`}
        >
          Clos
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-14 ">
        <div className="bg-white p-12 rounded-lg relative h-80 w-full lg:w-96">
          <div className="absolute top-4 left-4 p-3 w-full lg:w-auto">
            <p className="text-xl font-medium mb-8 text-center lg:text-left">
              État
            </p>
            <div className="space-y-7 flex flex-col items-center w-full">
              <div className="w-full max-w-[280px]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Prêt Société</span>
                  <div className="flex items-center gap-1">
                    <span className="text-green-500">Validé</span>
                    <CircleCheck size={16} className="text-green-500" />
                  </div>
                </div>
                <div className="h-4 w-full bg-green-500 rounded-full"></div>
              </div>
              <div className="w-full max-w-[280px]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Prêt HotDoggs</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[#4b4d9b]">En attente</span>
                    <Clock9 size={16} className="text-[#4b4d9b]" />
                  </div>
                </div>
                <div className="h-4 w-full rounded-full bg-gray-200">
                  <div className="h-4 w-[50%] bg-[#4b4d9b] rounded-l-full"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full mt-6">
              <a className="text-[] text-sm underline" href="#">
                Créer un nouveau dossier
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white p-12 rounded-lg relative h-80 w-full lg:w-96">
          <div className="absolute top-4 left-4 p-3">
            <p className="text-xl font-medium mb-8">Prêt Société</p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center h-full mt-5">
            <h1 className="text-5xl font-bold">39 234€</h1>
            <p className="text-gray-500">Montant du prêt en cours</p>
            <div className="flex gap-2 items-center mt-6">
              <CircleCheck className="text-green-500" />
              <p>Prêt validé</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-12 rounded-lg relative h-80 w-full lg:w-96">
          <div className="absolute top-4 left-4 p-3 w-full lg:w-auto">
            <p className="text-xl font-medium mb-8 text-center lg:text-left">
              En attente
            </p>
            <div className="flex flex-col items-center w-full">
              <div className="flex items-start justify-center w-full max-w-[280px] gap-6">
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 shrink-0">
                  <svg className="transform -rotate-90 w-full h-full">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="#4CAF50"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="226"
                      strokeDashoffset="56"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="#2196F3"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="226"
                      strokeDashoffset="113"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="#FFA726"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="226"
                      strokeDashoffset="169"
                    />
                  </svg>
                </div>
                <div className="flex flex-col space-y-2 lg:space-y-4">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleCheckStep("accordOuverture")}
                  >
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        checkedSteps.accordOuverture
                          ? "bg-[#4CAF50]"
                          : "border-2 border-[#4CAF50] bg-white"
                      }`}
                    >
                      {checkedSteps.accordOuverture && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm">Accord ouverture</span>
                  </div>
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleCheckStep("accordDemande")}
                  >
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        checkedSteps.accordDemande
                          ? "bg-[#2196F3]"
                          : "border-2 border-[#2196F3] bg-white"
                      }`}
                    >
                      {checkedSteps.accordDemande && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm">Accord demande</span>
                  </div>
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleCheckStep("evaluationRisques")}
                  >
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        checkedSteps.evaluationRisques
                          ? "bg-[#FFA726]"
                          : "border-2 border-[#FFA726] bg-white"
                      }`}
                    >
                      {checkedSteps.evaluationRisques ? (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <div className="w-2 h-2 bg-[#FFA726] rounded-full"></div>
                      )}
                    </div>
                    <span className="text-sm">Évaluation des risques</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-6 text-sm w-full lg:w-auto text-center lg:text-left pr-6">
            <p>
              <span className="">
                Pour déclencher la prochaine étape de validation, veuillez nous
                joindre :
              </span>
              <br />
              <button className="text-gray-500 flex items-center gap-2 justify-center lg:justify-start mx-auto lg:mx-0">
                <Download />
                Dossier super important.pdf
              </button>
            </p>
          </div>
        </div>
        <div className="bg-white p-12 rounded-lg relative h-80 w-full lg:w-96">
          <div className="absolute top-4 left-4 p-3">
            <p className="text-xl font-medium mb-8">Cloturé</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-32">
            <Image
              src={Trophy}
              alt="Trophy"
              className="h-40 w-40 object-contain"
            />
          </div>
          <div className="absolute bottom-4 left-4 p-3">
            <p>
              <span className="font-bold">Prêt Société</span> <br />
              <span className="text-gray-500">
                Estimation de clôture du dossier au : <br />
                <span className="font-bold">13/06/2022</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
