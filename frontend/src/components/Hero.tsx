function Hero() {
    return (
      <section className="bg-white text-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Empower Your Ideas <br className="hidden sm:inline" />
              With Creative Solutions
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              We help businesses and individuals bring their visions to life with cutting-edge technology and beautiful design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#get-started"
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="border border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Learn More
              </a>
            </div>
          </div>
  
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="./src/assets/typo3black.png"
              alt="Hero"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;
  