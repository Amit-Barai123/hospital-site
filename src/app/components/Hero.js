// components/HeroSection.js
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex items-center min-h-[500px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 opacity-80">
        <Image src="/hero-image.jpg" alt="Background graphic" layout="fill" objectFit="cover" priority />
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
        {/* Text Content */}
        <div className="flex-1 slide-in-elliptic-bottom-fwd">
          <h1 className="text-4xl md:text-8xl font-bold text-gray-800">
            Welcome to <span className="text-purple-600"> <br></br>Maharaju</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Yanthraa can help you build better applications using the open-source framework!
          </p>

          <button className="mt-8 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Empty div to keep layout balanced for the background graphic */}
        <div className="flex-1 hidden md:block"></div>
      </div>

      {/* Chat icon */}
      <div className="absolute bottom-10 right-10">
        <button className="flex items-center justify-center w-12 h-12 bg-black rounded-full shadow-lg text-white text-2xl">
          &#x2026;
        </button>
      </div>
    </section>
  );
}
