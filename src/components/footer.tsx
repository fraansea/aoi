const Footer = () => {
  return (
    <footer className="font-clash bg-black text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-6">
                Engage With Us In
                <br />
                Conversation.
              </h2>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-lg">
                We Would Love To Hear From You! Whether You're Looking To
                Discuss A New Project, Explore Design Possibilities, Or Simply
                Ask A Question, Our Team Is Here To Assist. Reach Out To Us
                Through The Contact Details Below, And We'll Get Back To You
                Promptly. Let's Bring Your Vision To Life Together!
              </p>
            </div>
          </div>

          {/* Right Side - House Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dpku5jzrf/image/upload/v1748738587/footerhome_ovxyay.webp"
                alt="Modern Architecture House"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid md:grid-cols-4 gap-8 border-t border-gray-800 pt-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-medium mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  studioaoiweb@gmail.com <br />
                  +91 96337 17471
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-xl font-medium mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Prices And Payments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Terms Of Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-medium mb-6">Social Media</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Brand Section */}
          <div className="flex items-end justify-start md:justify-end">
            <div className="text-right">
              <h1 className="text-2xl lg:text-3xl font-light tracking-widest">
                STUDIO.AOI
              </h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
