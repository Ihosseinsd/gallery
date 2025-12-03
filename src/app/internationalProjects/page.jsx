"use client";
import React, { useState } from "react";
import { Linkedin, Twitter, Instagram, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InternationalProjects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projects = [
    {
      date: "June 2022, Germany",
      title: "Modern Perspectives",
      description:
        "A contemporary art exhibition exploring modern visual narratives",
      longText:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness...",
      image: "/336ff0e0681d3955864599294368ba6f4c4da303.png",
    },
    {
      date: "June 2022, Germany",
      title: "Colors of Tradition",
      description:
        "Celebrating cultural heritage through vibrant and traditional artworks",
      longText:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness...",
      image: "/9e7adb2d8fcd89685ccb7774a3c6a22cc293686d.png",
    },
    {
      date: "June 2022, Germany",
      title: "Urban Reflections",
      description: "An artistic dialogue on city life and modern architecture",
      longText:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness...",
      image: "/cc2ca97b89b5ddf44a987add8b0c516b61576aa5.png",
    },
    {
      date: "June 2022, Germany",
      title: "Modern Perspectives",
      description:
        "A contemporary art exhibition exploring modern visual narratives",
      longText:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness...",
      image: "/336ff0e0681d3955864599294368ba6f4c4da303.png",
    },
    {
      date: "June 2022, Germany",
      title: "Colors of Tradition",
      description:
        "Celebrating cultural heritage through vibrant and traditional artworks",
      longText:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness...",
      image: "/9e7adb2d8fcd89685ccb7774a3c6a22cc293686d.png",
    },
    {
      date: "June 2022, Germany",
      title: "Urban Reflections",
      description: "An artistic dialogue on city life and modern architecture",
      longText:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness...",
      image: "/cc2ca97b89b5ddf44a987add8b0c516b61576aa5.png",
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

      {/* hero Section */}
      <section className="bg-[#F3F4F6] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-['Abhaya_Libre'] text-black font-bold text-center">
            International Projects
          </h1>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl m-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white mb-8 sm:mb-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center pb-8 sm:pb-[96px] gap-6 sm:gap-0">
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={329}
                  height={296}
                  className="relative w-full sm:w-[329px] h-auto sm:h-[296px] object-cover sm:mr-[52px]"
                />

                {/* Content */}
                <div className="w-full sm:w-auto">
                  <p className="text-[#B89E4F] font-normal text-base sm:text-lg lg:text-[20px] font-['Geist'] mb-2">
                    {project.date}
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal text-gray-900 mb-2 font-['Geist']">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg lg:text-[20px] font-normal font-['Geist'] mb-4">
                    {project.description}
                  </p>
                  <p className="text-[#9CA3AF] text-sm sm:text-base lg:text-[18px] mb-4 leading-relaxed font-['Geist']">
                    {project.longText}
                  </p>
                  <a
                    href="#"
                    className="text-[#B89E4F] font-['Geist'] text-base sm:text-lg lg:text-[18px] font-medium hover:text-yellow-700"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
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
