import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetail() {
  const teamMembers = [
    {
      name: "Emma Brown",
      role: "Projects Coordinator",
      image: "/321aef5e6774da2d9522ca9ccd7e9a5fb98635b6.png",
    },
    {
      name: "David Miller",
      role: "Art Director",
      image: "/c98eea5f0e09149839ecde2855d181165e4c98cb.png",
    },
  ];

  const otherProjects = [
    {
      date: "June 2022, Germany",
      title: "Colors of Tradition",
      image: "/image 4.png",
    },
    {
      date: "June 2022, Germany",
      title: "Colors of Tradition",
      image: "/image 5.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white text-black border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-34 py-4 pr-50">
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

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 ">
            {/* Left Column - Main Content */}
            <div className="col-span-2">
              <p className="text-[#B89E4F] font-['Geist'] font-normal text-[20px] mb-2">
                June 2022, Germany
              </p>
              <h1 className="text-[40px] font-['Geist'] font-normal text-black mb-4">
                Modern Perspectives
              </h1>
              <p className="text-black font-normal text-[20px] mb-8 font-['Geist']">
                A contemporary art exhibition exploring modern visual narratives
              </p>

              {/* Main Image */}

              <Image
                src="/image 3.png"
                width={600}
                height={539}
                alt="Modern Perspectives"
                className="w-full -mt-[70px] -ml-[145px]"
              />

              {/* Content Text */}
              <div className=" text-black font-normal text-[20px] leading-relaxed pr-[280px] -mt-[120px]">
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system.And expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness.
                </p>
                <p>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure rationally encounter consequences that are
                  extremely painful. Nor again is there anyone who loves or
                  pursues or desires to obtain pain of itself, because it is
                  pain, but because occasionally circumstances occur in which
                  toil and pain can procure him some great pleasure.
                </p>
                <p>
                  To take a trivial example, which of us ever undertakes
                  laborious physical exercise, except to obtain some advantage
                  from it? But who has any right to find fault with a man who
                  chooses to enjoy a pleasure that has no annoying consequences,
                  or one who avoids a pain that produces no resultant pleasure?
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee
                </p>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="col-span-1 ">
              {/* Team Members */}
              <div className="mb-2">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-4 mb-7">
                    {/* Avatar Final Fix */}
                    <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover "
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Other Projects */}
              <div>
                <div className="pt-8 mb-6 flex items-center gap-5 ">
                  <h3 className="text-[#B89E4F] font-medium">Other Projects</h3>
                  <div className="w-[278px] h-[2px] bg-[#B89E4F]"></div>
                </div>

                <div className="space-y-6">
                  {otherProjects.map((project, index) => (
                    <div key={index} className="flex ">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={180}
                        height={180}
                        className="w-[180px] h-[180px] -ml-8"
                      />
                      <div className="mt-10">
                        <p className="text-[16px] font-['Geist'] text-[#9CA3AF] mb-1">
                          {project.date}
                        </p>
                        <h4 className="font-normal text-[28px] font-['Geist'] text-black">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
