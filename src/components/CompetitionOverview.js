// CompetitionOverview.js
import React from 'react';

const CompetitionOverview = () => {
  return (
    <section className="py-16 bg-gray-200" data-aos="fade-up">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">The Competition Overview</h2>
        <p className="text-lg text-gray-700 mb-6">
          The ACTUS Foundation is organizing a competition for building prototype applications using ACTUS, aimed at 
          providing value to financial institutions and other users dependent on financial contracts. 
        </p>
        <p className="text-lg text-gray-700">
          Participants are encouraged to develop services or applications that integrate ACTUS into existing systems or 
          provide novel analyses, such as risk management.
        </p>
      </div>
    </section>
  );
};

export default CompetitionOverview;
