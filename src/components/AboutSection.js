// AboutSection.js
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-100" data-aos="fade-up">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">About ACTUS</h2>
        <p className="text-lg text-gray-700 mb-4">
          The ACTUS Financial Research Foundation (ACTUS Foundation) is dedicated to providing a freely available, 
          fully integrated financial contract standard. The ACTUS Standard consists of two fundamental components: 
          the ACTUS Data Dictionary and the ACTUS Cash Flow Generating Algorithms library.
        </p>
        <p className="text-lg text-gray-700">
          These tools describe the data formats and algorithms common to all financial contracts, facilitating 
          efficient risk analysis, cash flow agreements, and financial reporting.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
