import Navbar from "../component/navbar";
import SchoolLogo from "../assets/icon/iconPondok.png";
import Button from "../component/Button";

const Footer = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info & Links */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={SchoolLogo} alt="Logo" className="h-12 w-auto" />
                <h3 className="text-2xl font-bold tracking-wide">
                  SMP QUR'AN ASSYAUQI
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Membentuk Generasi Qur'ani yang Berakhlak Mulia dan Berprestasi.
              </p>
            </div>

            <div>
              <Navbar links={navLinks} variant="footer" />
            </div>

            <div className="text-gray-400 text-sm space-y-2">
              <p>
                Jl. Ahmad Yani No.KM 1, Kertanegara, Kec. Haurgeulis, Kabupaten
                Indramayu, Jawa Barat 45264, Indonesia
              </p>
              <a
                href="mailto:smpassyauqi@gmail.com?subject=Penerimaan%20Santri&body=Halo%20Saya%20ingin%20bertanya%20mengenai%20penerimaan%20santri/santriwati%20SMP%20Quran%20Asy%20Syauqi"
                target="_blank"
              >
                <p>Email: smpassyauqi@gmail.com</p>
              </a>
              <a
                href="https://wa.me/6282297855589?text=Halo%20Saya%20ingin%20bertanya%20mengenai%20penerimaan%20santri/santriwati%20SMP%20Quran%20Asy%20Syauqi"
                target="blank"
              >
                <p>Telp: +62 822-9785-5589</p>
              </a>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="flex flex-col gap-6">
            <div className="w-full h-72 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <iframe
                src="https://maps.google.com/maps?q=SMP+QUR'AN+ASY+SYAUQI+Indramayu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Lokasi Sekolah"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SMP Qur'an Assyauqi. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
