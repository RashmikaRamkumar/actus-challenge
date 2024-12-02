import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BenefitsSection = () => {
  return (
    <section className="py-16 px-10" data-aos="fade-up">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-[#1a6395] text-white p-6 rounded-lg hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Gain Industry Recognition</h3>
            <p className="text-lg">Showcase your innovative app to leading financial institutions and experts in the field.</p>
          </div>
          <div className="bg-[#1a6395] text-white p-6 rounded-lg hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Rewards for Your Innovation</h3>
            <p className="text-lg">Top submissions receive financial rewards and recognition for their groundbreaking contributions to the financial tech world.</p>
          </div>
          <div className="bg-[#1a6395] text-white p-6 rounded-lg hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Revolutionize Financial Systems</h3>
            <p className="text-lg">Help make financial systems more efficient, transparent, and adaptable by leveraging the ACTUS standard.</p>
          </div>
        </div>

    </section>
  );
};

export default BenefitsSection;
