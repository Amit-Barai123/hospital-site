// components/StatsSection.js
import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: 15, label: 'Years of Experience' },
    { number: 36, label: 'Qualified Experts' },
    { number: 120, label: 'Clients Every Year' },
    { number: 9, label: 'Intl. Partners' },
  ];

  return (
    <section className="bg-indigo-500 text-white py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">We’re Good with Numbers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <span className="text-8xl font-bold">{stat.number}</span>
              <p className="text-lg font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
