"use client";
import React, { useState } from "react";
import { Linkedin, Twitter, Instagram, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const column1 = [
    {
      src: "/d6707d1defcb745efce907d21b08722b327fec59.png",
      title: "Lady With Blue Eyes And White Hat",
    },
    {
      src: "/555ee492eb72ba73b04873fd3bcfa916ee4529bf.png",
      title: "Mademoiselle Pogány Brancusi Masterpiece",
    },
    {
      src: "/80fa6d670a07906257a732a4952470994e1de28f.png",
      title: "Lady With Blue Eyes And White Hat",
    },
  ];

  const column2 = [
    {
      src: "/8534232c4f7d099ad5f39b51dca57f051435bb99.png",
      title: "The Orchard – British Pastel Painting",
    },
    {
      src: "/ce513c6cb15a537af2cdb5be4a08a34fe38d4c71.png",
      title: "The Master At Work",
    },
    {
      src: "/58ea3425b0fbe92565761199507bf71fc6c64059.png",
      title: "The Orchard – British Pastel Painting",
    },
  ];

  const column3 = [
    {
      src: "/0a3353e15dce2627c9a5d9b37883a622e7a5e9d3.png",
      title: "The Master At Work",
    },
    {
      src: "/9390c56a25d96425f7f422ce3caf5faf723a2df2.png",
      title: "Lady With Blue Eyes And White Hat",
    },
    {
      src: "/33dc864a9fab3c035726bb1ca669d5ab0b6b8108.png",
      title: "Mademoiselle Pogány Brancusi Masterpiece",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white text-black border-b border-gray-200 shadow-sm relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold font-['Abhaya_Libre'] w-auto sm:w-[170px] h-auto sm:h-[39px] text-2xl sm:text-[34px]">
              Art Gallery
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 lg:space-x-8 text-sm font-['Geist']">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                About Us
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-gray-900">
                Our Team
              </Link>
              <Link href="/internationalProjects" className="text-gray-700 hover:text-gray-900">
                International Projects
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-gray-900">
                Gallery
              </Link>
              <Link href="/contactUs" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4 text-sm font-['Geist']">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  className="text-gray-700 hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  href="/internationalProjects"
                  className="text-gray-700 hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  International Projects
                </Link>
                <Link
                  href="/gallery"
                  className="text-gray-700 hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/contactUs"
                  className="text-gray-700 hover:text-gray-900 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <section className="bg-gray-100 text-black py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-center">Gallery</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* COLUMN 1 */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="w-full">
                <img src={column1[0].src} alt="" className="w-full h-auto object-cover" />
                <p className="font-medium text-black text-xl sm:text-2xl lg:text-[32px] font-['Geist'] mt-6 sm:mt-10 leading-tight">
                  Lady With Blue Eyes And White Hat
                </p>
              </div>

              <div className="w-full">
                <img src={column1[1].src} alt="" className="w-full h-auto object-cover" />
                <p className="w-full font-medium text-black font-['Geist'] text-xl sm:text-2xl lg:text-[32px] mt-6 sm:mt-10 leading-tight">
                  Mademoiselle Pogány Brancusi Masterpiece
                </p>
              </div>

              <div className="w-full">
                <img
                  src={column1[2].src}
                  alt=""
                  className="w-full h-auto object-cover object-center"
                />
                <p className="w-full font-medium text-black font-['Geist'] text-xl sm:text-2xl lg:text-[32px] mt-6 sm:mt-10 leading-tight">
                  Lady With Blue Eyes And White Hat
                </p>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="w-full">
                <img src={column2[0].src} alt="" className="w-full h-auto object-cover" />
                <p className="w-full font-medium text-black font-['Geist'] text-xl sm:text-2xl lg:text-[32px] mt-6 sm:mt-10 leading-tight">
                  The Orchard – British Pastel Painting
                </p>
              </div>

              <div className="w-full">
                <img src={column2[1].src} alt="" className="w-full h-auto object-cover" />
                <p className="w-full font-medium text-black font-['Geist'] text-xl sm:text-2xl lg:text-[32px] mt-6 sm:mt-10 leading-tight">
                  The Master At Work
                </p>
              </div>

              <div className="w-full">
                <img
                  src={column2[2].src}
                  alt=""
                  className="w-full h-auto object-cover"
                />
                <p className="w-full font-medium font-['Geist'] text-black text-xl sm:text-2xl lg:text-[32px] mt-6 sm:mt-10 leading-tight">
                  The Orchard – British Pastel Painting
                </p>
              </div>
            </div>

            {/* COLUMN 3 */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="w-full">
                <img
                  src={column3[0].src}
                  alt=""
                  className="w-full h-auto object-cover"
                />
                <p className="font-medium font-['Geist'] text-black text-xl sm:text-2xl lg:text-[32px] mt-6 sm:mt-10 leading-tight">
                  The Master At Work
                </p>
              </div>

              <div className="w-full">
                <img
                  src={column3[1].src}
                  alt=""
                  className="w-full h-auto object-cover"
                />
                <p className="w-full font-medium font-['Geist'] text-black text-xl sm:text-2xl lg:text-[32px] mt-6 sm:mt-10 leading-tight">
                  Lady With Blue Eyes And White Hat
                </p>
              </div>

              <div className="w-full">
                <img
                  src={column3[2].src}
                  alt=""
                  className="w-full h-auto object-cover"
                />
                <p className="w-full font-medium font-['Geist'] text-black text-xl sm:text-2xl lg:text-[32px] mt-6 sm:mt-10 leading-tight">
                  Mademoiselle Pogány Brancusi Masterpiece
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-8 sm:pt-[41px] pb-8 sm:pb-[39px] border-b border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex flex-wrap justify-center text-sm sm:text-[18px] font-normal space-x-4 sm:space-x-8 text-[#FFFFFF] mb-4 md:mb-0 font-['Geist']">
              <a href="#">Home</a>
              <a href="#">International Projects</a>
              <a href="#">Gallery</a>
              <a href="#">Our Team</a>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </div>
            <div className="flex space-x-6 mt-6 md:mt-0">
              <Linkedin className="w-5 h-5 hover:text-yellow-500 cursor-pointer transition" />
              <Twitter className="w-5 h-5 hover:text-yellow-500 cursor-pointer transition" />
              <Instagram className="w-5 h-5 hover:text-yellow-500 cursor-pointer transition" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 sm:mt-10 gap-4 sm:gap-8">
              <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-['Abhaya_Libre'] text-[#B89E4F] font-bold">
                Art Gallery
              </h3>
              <p className="text-[#7A7A7A] font-['Geist'] text-sm sm:text-base lg:text-[18px] font-normal">
                "Art Gallery is a personal space showcasing local and diverse
                that inspire creativity, add lots of taste and."
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
