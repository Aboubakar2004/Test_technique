import React from "react";
import Logo from "../images/logoliqtrade.webp";
import Image from "next/image";
import Picture from "../images/pexels-jarosz-2024901.jpg";
import { RiDashboardLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { FiUsers, FiSettings } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";

function SideBar() {
  return (
    <div className="h-screen w-[300px] bg-white shadow-lg p-6">
      <div className="flex flex-col h-full">
        <div className="mb-10 flex items-center justify-center">
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={50}
            priority
            className="object-contain w-32 lg:w-auto"
          />
        </div>

        <div className="flex flex-col flex-grow space-y-8">
          <div className="flex flex-col space-y-4">
            <button className="flex items-center space-x-3 text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium">
              <RiDashboardLine className="w-5 h-5" />
              <span>Tableau de Bord</span>
            </button>

            <button className="flex items-center space-x-3 text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium">
              <BiTransfer className="w-5 h-5" />
              <span>Mes transactions</span>
            </button>

            <button className="flex items-center space-x-3 text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium">
              <FiUsers className="w-5 h-5" />
              <span>Mes clients</span>
            </button>

            <button className="flex items-center space-x-3 text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium">
              <BiSupport className="w-5 h-5" />
              <span>Assistance</span>
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <button className="flex items-center space-x-3 text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium">
              <IoNotificationsOutline className="w-5 h-5" />
              <span>Mes notifications (1)</span>
            </button>

            <button className="flex items-center space-x-3 text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium">
              <FiSettings className="w-5 h-5" />
              <span>Réglages</span>
            </button>
          </div>
          <div className="flex items-center gap-2 mt-auto p-3">
            <Image
              src={Picture}
              alt="Logo"
              className="rounded-full w-12 h-12 object-cover"
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-sm">Paul Dumartin</p>
              <p className="text-xs flex ">
                Statut Vérification KYC:
                <span className="text-green-500 ml-1">Valide</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
