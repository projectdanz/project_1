import Seaction__pengenalan from "./about/seaction__pengenalan";
import saungPondok from "../assets/image/saungPondok.jpg";
import Seaction__keunggulan from "./about/seaction__keunggulan";
import Seaction__strukturInti from "./about/seaction__strukturInti";
import Footer from "./footer";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={saungPondok}
            alt="Tentang Kami"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
            Tentang Kami
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Mengenal lebih dekat profil, visi, dan misi SMP Qur'an Assyauqi
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <Seaction__pengenalan />
        <Seaction__strukturInti />
        <Seaction__keunggulan />
      </div>
      <Footer />
    </>
  );
};

export default About;
