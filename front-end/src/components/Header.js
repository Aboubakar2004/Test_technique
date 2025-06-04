"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../images/logoliqtrade.webp";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-4 sm:gap-8 lg:gap-12 items-center">
            <Image
              src={Logo}
              alt="Liqtrade"
              width={120}
              height={32}
              priority
              className="w-20 sm:w-24 lg:w-auto"
            />
            <div className="hidden md:flex gap-4 lg:gap-12">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 whitespace-nowrap text-sm lg:text-base"
              >
                Prêt
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 whitespace-nowrap text-sm lg:text-base"
              >
                Affacturage
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 whitespace-nowrap text-sm lg:text-base"
            >
              Simulateur
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 whitespace-nowrap text-sm lg:text-base"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 whitespace-nowrap text-sm lg:text-base"
            >
              Publications
            </a>
            <div className="flex items-center gap-2 lg:gap-4">
              <button className="px-2 lg:px-4 py-2 text-xs lg:text-sm border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50 whitespace-nowrap">
                S&apos;inscrire
              </button>
              <button className="px-2 lg:px-4 py-2 text-xs lg:text-sm bg-emerald-500 text-white rounded-md hover:bg-emerald-600 whitespace-nowrap">
                Se connecter
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg z-50">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-sm"
            >
              Prêt
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-sm"
            >
              Affacturage
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-sm"
            >
              Simulateur
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-sm"
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-sm"
            >
              Publications
            </a>
            <div className="pt-4 space-y-2">
              <button className="w-full px-3 py-2 text-sm border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50">
                S&apos;inscrire
              </button>
              <button className="w-full px-3 py-2 text-sm bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                Se connecter
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
