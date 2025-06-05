"use client";

import React, { useState } from "react";
import { Pen } from "lucide-react";
import Coin from "../images/coin.png";
import Image from "next/image";

function MyAccount() {
  const [score, setScore] = useState(75);
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "Paul",
    lastName: "Dumartin",
    address: "14 rue du Louvre",
    city: "PARIS",
    postalCode: "75001",
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="mt-7">
      <h1 className="text-2xl font-bold mb-4">Mon compte</h1>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
        <div className="bg-white p-12 rounded-lg relative h-48 w-full lg:w-64">
          <div className="absolute top-4 right-4">
            <Pen
              className="p-2 size-9 text-white rounded-lg bg-black cursor-pointer hover:bg-gray-800"
              onClick={() => setIsEditing(!isEditing)}
            />
          </div>
          <div className="absolute bottom-4 left-4">
            {isEditing ? (
              <form className="flex flex-col gap-2 w-full">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userInfo.firstName}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, firstName: e.target.value })
                    }
                    className="w-20 px-2 py-1 border rounded text-sm"
                    placeholder="Prénom"
                  />
                  <input
                    type="text"
                    value={userInfo.lastName}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, lastName: e.target.value })
                    }
                    className="w-20 px-2 py-1 border rounded text-sm"
                    placeholder="Nom"
                  />
                </div>
                <input
                  type="text"
                  value={userInfo.address}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, address: e.target.value })
                  }
                  className="w-full px-2 py-1 border rounded text-sm"
                  placeholder="Adresse"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userInfo.city}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, city: e.target.value })
                    }
                    className="w-20 px-2 py-1 border rounded text-sm"
                    placeholder="Ville"
                  />
                  <input
                    type="text"
                    value={userInfo.postalCode}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, postalCode: e.target.value })
                    }
                    className="w-20 px-2 py-1 border rounded text-sm"
                    placeholder="Code postal"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSave}
                  className="mt-2 px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600"
                >
                  Enregistrer
                </button>
              </form>
            ) : (
              <p>
                <span className="font-bold">
                  {userInfo.firstName} {userInfo.lastName}
                </span>{" "}
                <br />
                <span className="text-gray-500">
                  {userInfo.address} <br /> {userInfo.city}{" "}
                  {userInfo.postalCode}
                </span>
              </p>
            )}
          </div>
        </div>
        <div className="bg-white p-12 rounded-lg relative h-48 w-full lg:w-64">
          <p className="text-gray-500 absolute top-4 left-4">Segment</p>
          <div className="absolute bottom-4 right-4">
            <h1 className="text-5xl font-bold text-[#4b4d9b]">RET</h1>
          </div>
        </div>
        <div className="bg-white p-12 rounded-lg relative h-48 w-full lg:w-64">
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
        <div className="bg-white p-12 rounded-lg relative h-48 w-full lg:w-64">
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
        <div className="bg-white px-16 rounded-lg relative h-48 w-full lg:w-64">
          <p className="text-gray-500 absolute top-4 left-2">
            Montant dernière transaction
          </p>
          <p className="text-[#4b4d9b] absolute top-10 left-2 font-bold text-4xl">
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
