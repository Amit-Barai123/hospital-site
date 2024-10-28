// components/ServiceSection.js
import React from 'react';

const ServiceSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-start p-6 gap-8 md:p-12 bg-white text-gray-800 space-y-8 md:space-y-0">
      {/* Web Development Section */}
      <div className="flex flex-col items-center text-center md:text-left">
        <div className="relative w-16 h-16 mb-4">
          <div className="bg-purple-500 w-8 h-8 rounded-full absolute top-0 left-4"></div>
          <div className="bg-pink-500 w-8 h-8 rounded-full absolute bottom-0 right-4"></div>
        </div>
        <h2 className="text-lg font-bold">Web Development</h2>
        <ul className="text-sm mt-2 space-y-1">
          <li>• Front-end technologies like HTML5, CSS3, JavaScript, and popular frameworks like React, Angular, or Vue.js.</li>
          <li>• Back-end technologies like Node.js, Django, Ruby on Rails, Python, SpringBoot (Java) or .NET.</li>
          <li>• Content Management Systems (CMS) like WordPress, Drupal, or Joomla.</li>
        </ul>
      </div>

      {/* Mobile App Development Section */}
      <div className="flex flex-col items-center text-center md:text-left">
        <div className="relative w-16 h-16 mb-4">
          <div className="bg-pink-500 w-8 h-1 rounded-full absolute top-4 left-0"></div>
          <div className="bg-purple-500 w-8 h-1 rounded-full absolute top-4 left-8 rotate-45"></div>
        </div>
        <h2 className="text-lg font-bold">Mobile App Development</h2>
        <ul className="text-sm mt-2 space-y-1">
          <li>• iOS development using Swift or Objective-C.</li>
          <li>• Android development using Java or Kotlin.</li>
          <li>• Cross-platform development using frameworks like React Native, Flutter, or Xamarin.</li>
        </ul>
      </div>

      {/* Cloud Services Section */}
      <div className="flex flex-col items-center text-center md:text-left">
        <div className="relative w-16 h-16 mb-4">
          <div className="bg-purple-500 w-8 h-8 absolute top-0 left-4"></div>
          <div className="bg-pink-500 w-8 h-8 absolute bottom-0 right-4"></div>
        </div>
        <h2 className="text-lg font-bold">Cloud Services</h2>
        <ul className="text-sm mt-2 space-y-1">
          <li>• Hosting solutions like AWS (Amazon Web Services), Google Cloud Platform, Microsoft Azure.</li>
          <li>• Cloud infrastructure management and deployment using Docker, Kubernetes.</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceSection;
