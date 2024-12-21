"use client";
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Global Reach, Local Expertise",
      description:
        "Mavi Events brings international talent to Australian shores with the local expertise needed to ensure everything runs smoothly.",
      icon: "🌍",
    },
    {
      title: "Seamless Execution",
      description:
        "Our team handles all the logistics—from booking the artist to managing the event—allowing you to enjoy the experience without the hassle.",
      icon: "⚙️",
    },
    {
      title: "Passion for Music",
      description:
        "We're not just event planners; we are music lovers who understand what makes a live performance unforgettable.",
      icon: "🎶",
    },
    {
      title: "Tailored Experiences",
      description:
        "Every event is unique. We work closely with clients and artists to create an event that is perfectly suited to your needs.",
      icon: "✨",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-6">Why Choose Us</h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Discover what sets Mavi Events apart and why clients trust us to
          deliver unforgettable live music experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-left"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;