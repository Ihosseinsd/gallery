"use client";
import { useState } from "react";
import { Instagram, Linkedin, Twitter, Menu, X } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <nav className="bg-white text-black border-b border-gray-200 shadow-sm relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-15 py-4">
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
      {/* Page Title */}
      <section className="bg-[#F3F4F6] py-8 sm:py-10">
        <h1 className="text-center font-['Abhaya_Libre'] text-3xl sm:text-4xl lg:text-[48px] font-bold text-gray-900">
          Contact Us
        </h1>
      </section>

      {/* Form Section */}
      <div className="max-w-6xl mx-auto relative py-10 sm:py-20 px-4 sm:px-6">
        {/* Right Illustration */}
        <div className="mb-8 sm:mb-[68px] relative">
          <div className="w-full max-w-full lg:max-w-[641px] text-xl sm:text-2xl lg:text-[32px] text-black font-['Geist'] font-medium leading-tight">
            <p>Have a question or just want to say hello? Get in touch</p>
          </div>
          <img
            src="/undraw_mailbox_e7nc 1.png"
            alt=""
            className="hidden lg:block absolute right-0 top-10 w-36 opacity-90 pointer-events-none mt-8"
          />
        </div>

        {/* Form Container */}
        <div className="bg-white p-6 sm:p-10">
          <form className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-base sm:text-[18px] text-gray-700 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full max-w-full md:max-w-[336px] h-[56px] rounded-md border border-gray-300 px-4 text-sm focus:ring-0 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-base sm:text-[18px] text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full max-w-full md:max-w-[336px] h-[56px] rounded-md border border-gray-300 px-4 text-sm focus:ring-0 focus:outline-none"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-base sm:text-[18px] text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full max-w-full md:max-w-[336px] h-[56px] rounded-md border border-gray-300 px-4 text-sm focus:ring-0 focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-base sm:text-[18px] text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full max-w-full lg:max-w-[1056px] min-h-[126px] rounded-md border border-gray-300 text-sm focus:ring-0 focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-2 w-full sm:w-[142px] h-[52px] rounded-md bg-[#B89E4F] text-white text-base sm:text-[18px] font-['Geist'] hover:bg-[#b8953f] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
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
