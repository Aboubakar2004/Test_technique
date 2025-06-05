"use client";

import React, { useState } from "react";
import { Pen } from "lucide-react";
import Coin from "../images/coin.png";
import Image from "next/image";
function MyAccount() {
  const [score, setScore] = useState(75);

  return (
    <div className="mt-7">
      <h1 className="text-2xl font-bold mb-4">Mon compte</h1>
      <div className="flex justify-between gap-6">
        <div className="bg-white p-12 rounded-lg relative h-48 w-64">
          <div className="absolute top-4 right-4">
            <Pen className="p-2 size-9 text-white rounded-lg bg-black" />
          </div>
          <div className="absolute bottom-4 left-4">
            <p>
              <span className="font-bold">Paul Dumartin </span> <br />
              <span className="text-gray-500">
                14 rue du Louvre <br /> PARIS 75001
              </span>
            </p>
          </div>
        </div>
        <div className="bg-white p-12 rounded-lg relative h-48 w-64">
          <p className="text-gray-500 absolute top-4 left-4">Segment</p>
          <div className="absolute bottom-4 right-4">
            <h1 className="text-5xl font-bold text-[#4b4d9b]">RET</h1>
          </div>
        </div>
        <div className="bg-white p-12 rounded-lg relative h-48 w-64">
          <p className="text-gray-500 absolute top-4 left-4">
            Évalution des risques
          </p>
          <p className="text-green-500 absolute top-10 left-4 font-bold ">
            Risques faible
          </p>
          <div className="absolute bottom-4 right-4">
            <h1 className="text-5xl font-bold text-green-500">B</h1>
          </div>
        </div>
        <div className="bg-white p-12 rounded-lg relative h-48 w-64">
          <p className="text-gray-500 absolute top-4 left-4">Score risque</p>
          <p className="text-black absolute top-10 left-4 font-bold ">
            Lorem ipsum
          </p>
          <div className="absolute bottom-8 left-4 right-4">
            <input
              type="range"
              min="0"
              max="100"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="w-full h-5 appearance-none bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
              style={{
                background: `linear-gradient(to right, #4ade80 0%, #facc15 ${score}%, #e5e7eb ${score}%, #e5e7eb 100%)`,
              }}
            />
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>A</span>
              <span>B</span>
              <span>C</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-12 rounded-lg relative h-48 w-64">
          <p className="text-gray-500 absolute top-4 left-4">
            Montant dernière transaction
          </p>
          <p className="text-[#4b4d9b] absolute top-10 left-4 font-bold text-4xl">
            80K
          </p>
          <div className="absolute bottom-4 right-4">
            <Image src={Coin} alt="Logo" className="size-14" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
