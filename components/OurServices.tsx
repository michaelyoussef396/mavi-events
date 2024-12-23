"use client";
import React from "react";

const OurServices = () => {
  const services = [
    {
      title: "Artist Booking & Management",
      description:
        "We handle all aspects of artist bookings, including contract negotiation, scheduling, and logistics for international performers.",
      link: "/services/artist-booking",
    },
    {
      title: "Event Planning & Production",
      description:
        "From venue selection to sound and lighting, we offer end-to-end event planning to ensure flawless performances.",
      link: "/services/event-planning",
    },
    {
      title: "Promotion & Marketing",
      description:
        "Our marketing team ensures your event reaches the right audience through targeted advertising and collaborations.",
      link: "/services/promotion-marketing",
    },
    {
      title: "Tour Management",
      description:
        "Complete tour management services, including scheduling, venue coordination, and hospitality for international artists.",
      link: "/services/tour-management",
    },
    {
      title: "VIP & Hospitality Services",
      description:
        "Elevate events with VIP packages offering backstage access, meet-and-greet opportunities, and premium hospitality.",
      link: "/services/vip-hospitality",
    },
    {
      title: "Custom Event Solutions",
      description:
        "Tailored event solutions for festivals, club shows, or unique experiences to meet your vision.",
      link: "/services/custom-events",
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-800 text-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-between"
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <a
                href={service.link}
                className="mt-auto bg-teal-500 hover:bg-teal-400 text-white py-2 px-6 rounded-full text-sm font-medium transition"
              >
                Find Out More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
