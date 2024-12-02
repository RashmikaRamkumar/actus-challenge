// CompetitionPhases.js
import React from 'react';

const CompetitionPhases = () => {
  return (
    <section className="py-16 bg-gray-200" data-aos="fade-up">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Competition Phases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 1: Submission of Concept (8 Weeks)</h3>
            <p className="text-lg text-gray-700 mb-4">
              Deliverable: A written description (max 5 pages) outlining the app/service being developed.
            </p>
            <p className="text-lg text-gray-700">
              No code is required, but pseudo-code can be included to showcase functionality. Leverage ACTUS 
              training materials and documentation during this phase.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 2: Final Prototype (4 Weeks Post-Phase 1)</h3>
            <p className="text-lg text-gray-700 mb-4">
              Semi-finalists: Five submissions will be chosen for the second phase. Each semifinalist must submit a 
              working product to be eligible for the final prize.
            </p>
            <p className="text-lg text-gray-700">
              A winner will be selected and receive an additional prize.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionPhases;
