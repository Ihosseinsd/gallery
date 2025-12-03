"use client";
import React, { useState } from "react";
import { Linkedin, Instagram, Youtube, Twitter, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArtGallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projects = [
    {
      date: "June 2022, Germany",
      title: "Modern Perspectives",
      description:
        "A contemporary art exhibition exploring modern visual narratives",
      image: "/336ff0e0681d3955864599294368ba6f4c4da303.png",
    },
    {
      date: "March 2021, France",
      title: "Colors of Tradition",
      description:
        "Celebrating cultural heritage through vibrant and traditional artworks",
      image: "/9e7adb2d8fcd89685ccb7774a3c6a22cc293686d.png",
    },
    {
      date: "November 2020, United States",
      title: "Urban Reflections",
      description: "An artistic dialogue on city life and modern architecture",
      image: "/cc2ca97b89b5ddf44a987add8b0c516b61576aa5.png",
    },
  ];

  const team = [
    {
      name: "Sarah Jefferson",
      role: "Gallery Manager",
      image: "/321aef5e6774da2d9522ca9ccd7e9a5fb98635b6.png",
    },
    {
      name: "David Miller",
      role: "Art Director",
      image: "/c98eea5f0e09149839ecde2855d181165e4c98cb.png",
    },
    {
      name: "Emma Brown",
      role: "Projects Coordinator",
      image: "/fae3856d096b364d7c7179e61b2f34f9515c49bd.png",
    },
  ];

  const galleryImages = [
    "/image 11.png",
    "/image 12.png",
    "/image 13.png",
    "/image 14.png",
  ];

  return (
    <div className="min-h-screen ">
      {/* Navigation */}
      <nav className="bg-white text-black border-b border-gray-200 shadow-sm relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-15 py-4">
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

      {/* Hero Section */}
      <section className="bg-[#F3F4F6] py-10 sm:py-20 px-4 sm:px-6">
        <div className="container m-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0">
            {/* Image - 760x507px */}
            <div className="relative flex flex-col lg:flex-row items-center w-full lg:w-auto">
              <div className="flex flex-col justify-center items-center lg:relative lg:left-35 order-2 lg:order-1 mb-6 lg:mb-0">
                <div className="mb-6 max-w-full lg:max-w-[545px] px-4 lg:px-0">
                  <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-extrabold text-gray-900 leading-tight font-['Abhaya_Libre']">
                    Exploring Art Beyond Borders
                  </h1>
                </div>
                <div className="lg:mr-36 text-center lg:text-left">
                  <div className="mb-4 max-w-full lg:max-w-[280px]">
                    <p className="text-gray-700 text-base sm:text-lg lg:text-[20px] font-normal font-['Geist']">
                      A personal collection showcasing creativity, culture, and
                      international projects
                    </p>
                  </div>

                  {/* Second paragraph - 280x56px */}
                  <div className="max-w-full lg:max-w-[280px]">
                    <p className="text-gray-600 text-base sm:text-lg lg:text-[20px] font-normal font-['Geist']">
                      Celebrating art, people, and global creativity
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src="/95aa81c32dbc8971b90201c82933aa814441de87.png"
                alt="Abstract colorful art"
                width={760}
                height={507}
                className="object-cover w-full max-w-[760px] h-auto lg:w-[760px] lg:h-[507px] order-1 lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* International Projects */}
      <section className="py-10 sm:py-20 text-black px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold mb-4 font-['Abhaya_Libre']">
              International Projects
            </h2>
            {/* Golden line - 80px height */}
            <div
              className="mx-auto bg-[#B89E4F]"
              style={{ width: "2px", height: "80px" }}
            ></div>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {projects.map((project, index) => {
              const isSecond = index === 1;
              return (
                <div key={index} className="flex justify-center">
                  <div className={`flex flex-col sm:flex-row gap-6 sm:gap-8 items-center max-w-full sm:max-w-[801px] ${
                      isSecond ? "sm:flex-row-reverse" : ""
                    }`}>
                    <div className="w-full sm:w-[329px] h-[200px] sm:h-[296px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className={`w-full sm:w-[392px] text-center sm:text-left ${isSecond ? "sm:text-left" : ""}`}>
                      <p className="text-[#B89E4F] font-normal text-sm sm:text-[14px] mb-3 font-['Geist']">
                        {project.date}
                      </p>
                      <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-normal text-gray-900 mb-4 font-['Geist']">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg lg:text-[20px] font-normal font-['Geist']">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="border text-[20px] font-normal border-[#B89E4F] text-[#B89E4F] px-6 py-2 hover:bg-yellow-50 transition font-['Geist']">
              View All Projects →
            </button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 text-black bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold mb-4 font-['Abhaya_Libre']">
            About us
          </h2>
          <p className="text-[#B89E4F] text-base sm:text-lg lg:text-[20px] font-normal mb-6 font-['Geist']">
            Meet the people and vision behind our gallery
          </p>
          <p className="text-gray-700 text-base sm:text-lg lg:text-[20px] font-normal max-w-4xl leading-relaxed font-['Geist']">
            "Our gallery is a personal space dedicated to showcasing creativity,
            innovation, and cultural diversity. We believe that art connects
            people across borders and tells stories that words cannot. Through
            both local and international projects, we aim to inspire, engage,
            and create meaningful artistic experiences."
          </p>

          {/* Our Team */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-center mb-8 sm:mb-12 font-['Abhaya_Libre']">
              Our Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover mb-4 grayscale hover:grayscale-0 transition"
                  />
                  <h4 className="text-lg sm:text-[20px] font-semibold text-gray-900 font-['Geist']">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 text-base sm:text-[18px] font-medium font-['Geist']">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="border text-[20px] font-normal border-[#B89E4F] text-[#B89E4F] px-6 py-2 hover:bg-yellow-50 transition font-['Geist']">
                View All Members →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 text-black bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-center mb-4 font-['Abhaya_Libre']">
            Gallery
          </h2>
          <p className="text-center text-base sm:text-lg lg:text-[20px] font-normal text-gray-600 mb-8 sm:mb-12 font-['Geist']">
            A selection of artworks from our personal and international projects
          </p>

          {/* Gallery grid with 271x352px images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="w-full sm:w-[271px] h-[300px] sm:h-[352px] overflow-hidden mx-auto"
              >
                <img
                  src={img}
                  alt={`Gallery artwork ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border text-[20px] font-normal border-[#B89E4F] text-[#B89E4F] px-6 py-2 hover:bg-yellow-50 transition font-['Geist']">
              View Gallery →
            </button>
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
