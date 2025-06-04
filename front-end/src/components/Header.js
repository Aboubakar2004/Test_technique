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
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Liqtrade"
              width={120}
              height={32}
              priority
              className="w-24 sm:w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Prêt
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Affacturage
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Simulateur
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Publications
            </a>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50">
                S&apos;inscrire
              </button>
              <button className="px-4 py-2 text-sm bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                Se connecter
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg z-50">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Prêt
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Affacturage
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Simulateur
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
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
