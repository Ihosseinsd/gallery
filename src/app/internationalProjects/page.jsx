import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InternationalProjects() {
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
      <nav className="bg-white text-black border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl pl-0 mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className=" font-bold font-['Abhaya_Libre'] w-[170px] h-[39px] text-[34px]">
              Art Gallery
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-['Geist']">
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
          </div>
        </div>
      </nav>

      {/* hero Section */}
      <section className="bg-[#F3F4F6] py-5">
        <div className="max-w-7xl mx-auto  px-6">
          <h1 className="text-[48px] font-['Abhaya_Libre'] text-black font-bold text-center">
            International Projects
          </h1>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12">
        <div className="max-w-6xl m-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white ">
              <div className="flex items-center pb-[96px]">
                {/* Image */}

                <Image
                  src={project.image}
                  alt={project.title}
                  width={329}
                  height={296}
                  className="relative mr-[52px]"
                />

                {/* Content */}
                <div className="">
                  <p className="text-[#B89E4F] font-normal text-[20px] font-['Geist'] mb-2">
                    {project.date}
                  </p>
                  <h2 className="text-[40px] font-normal text-gray-900 mb-2 font-['Geist']">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-[20px] font-normal font-['Geist'] mb-4">
                    {project.description}
                  </p>
                  <p className="text-[#9CA3AF] text-[18px] mb-4 leading-relaxed font-['Geist']">
                    {project.longText}
                  </p>
                  <a
                    href="#"
                    className="text-[#B89E4F] font-['Geist'] text-[18px] font-medium hover:text-yellow-700"
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
        <div className="max-w-6xl mx-auto">
          <div className="pt-[41px] pb-[39px] border-b border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex text-[18px] font-normal space-x-8 text-[#FFFFFF] mb-4 md:mb-0 font-['Geist']">
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
            <div className="flex items-center mt-10 gap-8">
              <h3 className="text-[36px] font-['Abhaya_Libre'] text-[#B89E4F] font-bold">
                Art Gallery
              </h3>
              <p className="text-[#7A7A7A] font-['Geist'] text-[18px] font-normal">
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
