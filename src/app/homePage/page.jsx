import React from "react";
import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArtGallery() {
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
      <nav className="bg-white text-black border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-34 pl-15 py-4 pr-0">
          <div className="flex justify-between items-center">
            <div className=" font-bold font-['Abhaya_Libre'] w-[170px] h-[39px] text-[34px]">
              Art Gallery
            </div>
            <div className=" md:flex space-x-8 text-sm font-['Geist']">
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

      {/* Hero Section */}
      <section className="bg-[#F3F4F6] py-20 px-6 ">
        <div className="container m-auto">
          <div className="flex justify-center items-center">
            {/* Image - 760x507px */}
            <div className="relative flex items-center ">
              {/* <div > */}
              <div className=" flex flex-col justify-center items-center relative left-35">
                <div className="mb-6 max-w-[545px]">
                  <h1 className="text-[64px] font-extrabold text-gray-900 leading-tight font-['Abhaya_Libre']  ">
                    Exploring Art Beyond Borders
                  </h1>
                </div>
                <div className="mr-36">
                  <div
                    style={{ width: "280px", height: "84px" }}
                    className="mb-4"
                  >
                    <p className="text-gray-700 text-[20px] font-normal  font-['Geist']">
                      A personal collection showcasing creativity, culture, and
                      international projects
                    </p>
                  </div>

                  {/* Second paragraph - 280x56px */}
                  <div style={{ width: "280px", height: "56px" }}>
                    <p className="text-gray-600 text-[20px] font-normal  font-['Geist']">
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
                className="object-cover w-[760px] h-[507px] "
                // layout=""
              />

              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* International Projects */}
      <section className="py-20 text-black px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[48px] font-bold mb-4 font-['Abhaya_Libre']">
              International Projects
            </h2>
            {/* Golden line - 80px height */}
            <div
              className="mx-auto bg-[#B89E4F]"
              style={{ width: "2px", height: "80px" }}
            ></div>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => {
              const isSecond = index === 1;
              return (
                <div key={index} className="flex justify-center">
                  <div
                    style={{ width: "801px", height: "296px" }}
                    className={`flex gap-8 items-center ${
                      isSecond ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div style={{ width: "329px", height: "296px" }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div
                      style={{ width: "392px", height: "172px" }}
                      className={isSecond ? "text-left" : ""}
                    >
                      <p className="text-[#B89E4F] font-normal text-[14px] mb-3 font-['Geist']">
                        {project.date}
                      </p>
                      <h3 className="text-[40px] font-normal text-gray-900 mb-4 font-['Geist']">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-[20px] font-normal font-['Geist']">
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
      <section className="py-20 px-6 text-black bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[48px] font-bold mb-4 font-['Abhaya_Libre']">
            About us
          </h2>
          <p className="text-[#B89E4F] text-[20px] font-normal mb-6 font-['Geist']">
            Meet the people and vision behind our gallery
          </p>
          <p className="text-gray-700 text-[20px] font-normal max-w-4xl leading-relaxed font-['Geist']">
            "Our gallery is a personal space dedicated to showcasing creativity,
            innovation, and cultural diversity. We believe that art connects
            people across borders and tells stories that words cannot. Through
            both local and international projects, we aim to inspire, engage,
            and create meaningful artistic experiences."
          </p>

          {/* Our Team */}
          <div className="mt-16 ">
            <h3 className="text-[48px] font-bold text-center mb-12 font-['Abhaya_Libre']">
              Our Team
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover  mb-4 grayscale hover:grayscale-0 transition"
                  />
                  <h4 className="text-[20px] font-semibold text-gray-900 font-['Geist']">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 text-[18px] font-medium font-['Geist']">
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
      <section className="py-20 px-6 text-black bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[48px] font-bold text-center mb-4 font-['Abhaya_Libre']">
            Gallery
          </h2>
          <p className="text-center text-[20px] font-normal text-gray-600 mb-12 font-['Geist']">
            A selection of artworks from our personal and international projects
          </p>

          {/* Gallery grid with 271x352px images */}
          <div className="grid grid-cols-4 gap-4 justify-center">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                style={{ width: "271px", height: "352px" }}
                className="overflow-hidden"
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
