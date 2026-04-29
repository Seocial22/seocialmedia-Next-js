import React from "react";
import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";

export const Founders = () => {
  const founders = [
    {
      name: "Mudit Mathur",
      role: "Co-Founder & CEO",
      image: "/images/founders/muditmathur.jpg",
      bio: "A dynamic entrepreneur with over 12 years of cross-industry expertise spanning Banking, Pharmaceuticals, Hospitality, and Digital Marketing. Mudit brings a unique blend of strategic thinking and hands-on execution to drive measurable results for our healthcare clients.",
      education: [
        "MSc Digital Marketing & Channel Management - University of Surrey, UK",
        "MBA Marketing - Alliance University, Bangalore",
        "B.Sc. Hospitality & Hotel Administration - IHM Ahmedabad",
      ],
      linkedin: "https://www.linkedin.com/in/mudit-mathur-6b738327/",
      email: "info@seocialmedia.in",
      experience: "12+ Years",
    },
    {
      name: "Kushagra Parashar",
      role: "Co-Founder & CEO",
      image: "/images/founders/kushagra-parasher.jpg",
      bio: "A highly accomplished and results-driven entrepreneur with over 16 years of experience across Pest Control, Digital Marketing, and Technology. Kushagra Parashar brings a strong foundation in Software Engineering and business strategy, combining technical expertise with practical execution to deliver measurable results. Known for driving innovation, optimizing operations, and creating scalable growth strategies, along with extensive experience in managing teams and handling diverse client portfolios, the focus remains on delivering high-impact solutions for businesses across industries, including healthcare and commercial sectors.",
      education: [
        "Bachelor of Science in Information Technology (B.Sc IT)",
        "Certified in Software Engineering – NIIT Master of Business Administration",
        "(MBA) – Symbiosis (Specialization: Marketing)",
      ],
      linkedin: "https://www.linkedin.com/in/kushagra-parashar-6550b7385/",
      email: "info@seocialmedia.in",
      experience: "16+ Years",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold uppercase tracking-wide">
              Leadership Team
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The visionaries behind our success, bringing decades of combined
            expertise and unwavering commitment to excellence
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-[600px] bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-12 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400 rounded-full blur-2xl animate-pulse delay-300"></div>
                </div>

                <div className="relative">
                  {/* Rotating gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>

                  {/* Main image container */}
                  <div className="relative w-96 h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Experience badge */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl border-2 border-blue-100">
                    <div className="flex items-center gap-2">
                      <Award className="text-blue-600" size={20} />
                      <span className="font-bold text-gray-900">{founder.experience}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10">
                {/* Name & Role */}
                <div className="mb-8 text-center">
                  <h3 className="text-4xl font-bold text-gray-900 mb-3">
                    {founder.name}
                  </h3>
                  <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
                    {founder.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-gray-700 leading-relaxed mb-8 text-center text-base">
                  {founder.bio}
                </p>

                {/* Education */}
                <div className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="text-blue-600" size={24} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Education
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {founder.education.map((edu, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 pl-4 border-l-3 border-blue-500 hover:border-purple-500 transition-colors duration-300"
                      >
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Linkedin size={20} />
                    <span className="font-semibold">Connect</span>
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Mail size={20} />
                    <span className="font-semibold">Email</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};