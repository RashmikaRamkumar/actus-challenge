import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const BannerSection = () => {
  return (
    <section className="bg-[#1a6395] text-white p-10 text-center rounded-b-lg shadow-lg"
    data-aos="fade-up"  // Adding AOS animation effect
>

        <h1 className="text-4xl font-semibold mb-2">ACTUS Financial Innovation Competition</h1>
        <p className="text-xl mb-4">Create cutting-edge financial apps using the ACTUS infrastructure.</p>
        <a href="#register" className="bg-[#012e55] text-white py-3 px-6 rounded-lg text-xl hover:bg-[#015b72] transition duration-300 ease-in-out">
          Submit Your Concept Today!
        </a>

    </section>
  );
};

export default BannerSection;
