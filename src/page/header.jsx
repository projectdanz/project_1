import Navbar from "../component/navbar";
import image__school from "../assets/image/image__school.jpg";
import Button from "../component/Button";

const Header = () => {
    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#", label: "About Us" },
        { href: "#", label: "Contact Us" },
    ];

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

            {/* Navbar */}
            <Navbar links={navLinks} className="justify-center" />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide drop-shadow-lg">
                    SMP QUR'AN ASY SYAUQI
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
                    “Mendidik Generasi Qur’ani Yang Terbangun Jiwa Leadership Dan
Enterpreneurship”
                </p>
                <Button variant="primary" className="bg-amber-600 hover:bg-amber-700">
                    Daftar Sekarang
                </Button>
            </div>
        </div>
    );
};

export default Header;