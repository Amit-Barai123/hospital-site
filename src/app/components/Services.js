import React from 'react';

const Services = () => {
  return (
    <div className=" py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* AI Services Section */}
        <div >
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Make your Business Smarter with Artificial Intelligence Services & Solution
          </h2>
          <p className="text-gray-700 mb-4">
            Today Machine Learning and Artificial Intelligence is penetrating every side of the business, from deploying Chatbots to AI-driven platforms. We help other businesses in building cutting-edge AI solutions that enable them to be a leader. Yanthraa Information Systems leverages machine learning (ML), image recognition, and automatic speech recognition (ASR) technologies to the fullest benefit of its customers.
          </p>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Artificial Intelligence can change the future of your company by transforming your businesses.</li>
            <li>Yanthraa understands and implements deep learning, natural language processing, and machine learning to ensure that we develop a powerful and reliable AI.</li>
          </ul>
        </div>

        {/* IoT Services Section */}
        <div >
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Unleashing IoT to make the world connected intelligently
          </h2>
          <p className="text-gray-700 mb-4">
            Internet of Things (IoT) is a fabric that is woven of commodities in our surroundings, connected digitally. These commodities talking to each other have given rise to a new digital ecosystem you would like to leverage to your advantage. Of course, there are challenges but that’s why we are here, creating new digital, connected experiences of your customers.
          </p>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Whereas IoT harvests the true value of connectivity, your customers benefit from a truly customer-centric experience.</li>
            <li>This enables your business to have happier customers and to utilize the accurate insights enabled via analytics, Machine Learning and Artificial Intelligence —</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Services;
