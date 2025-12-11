import Header from "./page/header";
import VisiMisi from "./page/main/seaction__visiMisi";
import ProgramUnggulan from "./page/main/seaction__programUnggulan";
import Fasilitas from "./page/main/seaction__fasilitas";
import Testimoni from "./page/main/seaction__testimoni";
import Footer from "./page/footer";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./component/Button";

const Home = () => {
  return (
    <>
      <Header />
      <VisiMisi />
      <ProgramUnggulan />
      <Fasilitas />
      <div className="flex justify-center pb-8">
        <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeiVbj1oUbye_KVPuX1ln60Jt8aTkC3JCmzb943GMXLpIrthA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-64 py-4">Daftar Sekarang</Button>
            </a>
      </div>
      <Testimoni />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/6282297855589?text=Halo%20Saya%20ingin%20bertanya%20mengenai%20penerimaan%20santri/santriwati%20SMP%20Quran%20Asy%20Syauqi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#0390F1] text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={32} color="#ffffffff"/>
      </a>
    </>
  );
};

export default Home;
