"use client";
import { useState } from "react";
import { Instagram, Linkedin, Twitter, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OurTeam() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const team = [
    {
      name: "Sarah Thompson",
      role: "Chief Executive Officer (CEO)",
      description:
        "Company leadership, defining main strategies and policies, guiding teams, and overseeing projects to achieve commercial and architectural goals.",
      img: "/2d4d6cc40014e013288faa55941f12e54960fe63.png",
    },
    {
      name: "Michael Anderson",
      role: "Civil Engineer",
      description:
        "Responsible for designing and supervising the execution of structural works, analyzing material strength, and ensuring compliance with safety and quality standards in projects.",
      img: "/73f2f814464b1216be28298bd7e9285d73c937fc.png",
    },
    {
      name: "Saeide Ashouri",
      role: "Project Planning & Senior Drafting Officer",
      description:
        "The Civil Engineer executes and supervises construction activities according to project drawings and specifications. He monitors quality, assists in resolving on-site issues, and ensures compliance with safety and engineering standards. His work directly supports the successful completion of structural and infrastructure tasks.",
      img: "/020a0dc5683838e81f1f57a70b69932eaa9cd7ed.png",
    },
    {
      name: "John Ramirez",
      role: "Architect",
      description:
        "Creative design of architectural spaces, preparing drawings and 3D models, collaborating with contractors to achieve efficient and aesthetic designs.",
      img: "/1b3ffd58ff5446e4853a6e9c13acd0c0bd96e9a8.png",
    },
    {
      name: "Emily Carter",
      role: "Architect",
      description:
        "Creative design of architectural spaces, preparing drawings and 3D models, collaborating with contractors to achieve efficient and aesthetic designs.",
      img: "/e497e1253134ebed4d3aa0483148895ab328ecd6.png",
    },
    {
      name: "Robert Hayes",
      role: "Architectural Drafter",
      description:
        "Preparing accurate architectural drawings using CAD software, correcting and completing technical details, supporting architects in providing project documentation.",
      img: "/12f113e951cc799511f30f9e6a2d40339cb7f70e.png",
    },
    {
      name: "Ethan Collins",
      role: "Architectural Drafter",
      description:
        "Preparing accurate architectural drawings using CAD software, correcting and completing technical details, supporting architects in providing project documentation.",
      img: "/0fce594cdc3bf50ac25adde8b469fe2f2619bc7b.png",
    },
    {
      name: "Sophia Reynolds",
      role: "Architectural Assistant",
      description:
        "Supporting the design team in data collection, preparing presentations, and assisting in coordination between project teams and contractors.",
      img: "/2d4d6cc40014e013288faa55941f12e54960fe63.png",
    },
    {
      name: "Daniel Foster",
      role: "Architectural Assistant",
      description:
        "Supporting the design team in data collection, preparing presentations, and assisting in coordination between project teams and contractors.",
      img: "/12ce83fc512bc06b418b5e6c4ac27510669bbf39.png",
    },
    {
      name: "Jason Holloway",
      role: "Business Development Manager",
      description:
        "Identifying new markets, negotiating with clients, creating commercial contracts, and expanding business relationships to grow the company’s architectural activities.",
      img: "/00a85027d1ea0aa4724a2ec7d2ab9dc3298fa45a.png",
    },
  ];

  return (
    <div className="w-full bg-white text-black font-sans">
      {/* Header */}
      <nav className="bg-white text-black border-b border-gray-200 shadow-sm relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold font-['Abhaya_Libre'] w-auto sm:w-[170px] h-auto sm:h-[39px] text-2xl sm:text-[34px]">
              Art Gallery
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 lg:space-x-8 text-sm font-['Geist'] lg:mr-[140px]">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                About Us
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-gray-900">
                Our Team
              </Link>
              <Link
                href="/internationalProjects"
                className="text-gray-700 hover:text-gray-900"
              >
                International Projects
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-gray-900"
              >
                Gallery
              </Link>
              <Link
                href="/contactUs"
                className="text-gray-700 hover:text-gray-900"
              >
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

      {/* Title */}
      <section className="bg-gray-100 text-black py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-['Abhaya_Libre'] font-bold text-center">
            Our Team
          </h1>
        </div>
      </section>

      {/* Team section */}
      <section className="container mx-auto space-y-12 sm:space-y-20 mt-8 sm:mt-[64px] px-4 sm:px-6">
        {team.map((person, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-full sm:max-w-[1040px] mx-auto">
            <div className="w-full sm:w-[260px] h-[200px] sm:h-[174px] overflow-hidden flex-shrink-0">
              <Image
                src={person.img}
                width={260}
                height={174}
                alt={person.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex mt-0 sm:mt-7 flex-col gap-1 w-full sm:w-[740px]">
              <h3 className="font-['Geist'] font-semibold text-lg sm:text-[20px]">
                {person.name}
              </h3>
              <span className="font-['Geist'] mb-2 font-medium text-base sm:text-[18px] text-[#6B7280]">
                {person.role}
              </span>
              <p className="font-['Geist'] font-medium text-base sm:text-[18px] text-gray-700">
                {person.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-black mt-12 sm:mt-20 text-white py-3">
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
