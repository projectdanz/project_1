import image__school from "../assets/image/image__school.jpg";
import Button from "../component/Button";

const Header = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image__school}
          alt="School Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide drop-shadow-lg">
          SMP QUR'AN ASSYAUQI
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-wide drop-shadow-lg">
          BOARDING SCHOOL
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
          “Mendidik Generasi Qur’ani Yang Terbangun Jiwa Leadership Dan
          Enterpreneurship”
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeiVbj1oUbye_KVPuX1ln60Jt8aTkC3JCmzb943GMXLpIrthA/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" className="bg-amber-600 hover:bg-amber-700">
            Daftar Sekarang
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
