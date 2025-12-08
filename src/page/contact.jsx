import { useEffect, useRef } from "react";
import ayokPondok from "../assets/image/ayokPondok.png";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const scrollY = window.scrollY;
        // Parallax effect: Move the card slightly faster/slower
        // "Naek terlebih dahulu" implies moving up faster (negative translateY)
        // or we can try a smooth lag. Let's try a subtle negative parallax to make it 'float' up.
        cardRef.current.style.transform = `translateY(-${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header / Hero Section */}
      <div className="h-72 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Hubungi Kami
          </h1>
          <p className="text-white/90 text-lg max-w-xl">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami jika ada
            pertanyaan seputar pendaftaran atau informasi lainnya.
          </p>
        </div>
        {/* Decorative circle */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 -mt-8 relative z-20">
        <div
          ref={cardRef}
          className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-100 ease-out will-change-transform"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto bg-slate-100">
              <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20 z-10"></div>
              <img
                src={ayokPondok}
                alt="Mari Mondok"
                className="w-full h-full object-cover relative z-0"
              />
            </div>

            {/* Contact Info Section */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Informasi Kontak
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Silahkan hubungi kami melalui salah satu saluran di bawah ini.
                Tim kami akan segera merespon pesan Anda.
              </p>

              <div className="space-y-6">
                {/* Whatsapp */}
                <a
                  href="https://wa.me/6282297855589?text=Halo%20Saya%20ingin%20bertanya%20mengenai%20penerimaan%20santri/santriwati%20SMP%20Quran%20Asy%20Syauqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-2xl bg-green-50 border border-green-100 hover:bg-green-100 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <FaWhatsapp size={32} color="#ffffffff"/>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                      Whatsapp
                    </p>
                    <p className="text-lg font-bold text-slate-800">
                      +62 822-9785-5589
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:smpassyauqi@gmail.com?subject=Penerimaan%20Santri&body=Halo%20Saya%20ingin%20bertanya%20mengenai%20penerimaan%20santri/santriwati%20SMP%20Quran%20Asy%20Syauqi"
                  className="flex items-center p-4 rounded-2xl bg-blue-50 border border-blue-100 hover:bg-blue-100 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-lg font-bold text-slate-800 break-all">
                      smpassyauqi@gmail.com
                    </p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://maps.google.com/maps?q=SMP+QUR'AN+ASY+SYAUQI+Indramayu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-2xl bg-red-50 border border-red-100 hover:bg-red-100 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                      Lokasi
                    </p>
                    <p className="text-lg font-bold text-slate-800">
                      Indramayu, Jawa Barat
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <p className="text-slate-500 mb-4 font-medium">
                  Ikuti Kami di Sosial Media
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-pink-500 hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white p-4 rounded-3xl shadow-lg">
          <div className="w-full h-96 rounded-2xl overflow-hidden relative">
            <iframe
              title="Map SMP Quran Asy Syauqi"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=SMP+QUR'AN+ASY+SYAUQI+Indramayu&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
