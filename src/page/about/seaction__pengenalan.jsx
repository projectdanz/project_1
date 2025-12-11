import imageSchool from "../../assets/image/image__school.jpg";
import Button from "../../component/Button";

const Seaction__pengenalan = () => {
  const points = [
    "Menyelenggarakan pesantren Qur’an Ahlussunnah wal Jamaah.",
    "Mengadakan agrowisata dan edukasi alam.",
    "Pelatihan dan pembekalan santri serta masyarakat dalam hal hard skill dan soft skill.",
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <img
              src={imageSchool}
              alt="Gedung Sekolah SMP Qur'an Assyauqi"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
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
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">
                    Terakreditasi
                  </p>
                  <p className="text-lg font-bold text-slate-800">Unggul</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
              TENTANG KAMI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Membangun Generasi <span className="text-primary">Qur'ani</span>{" "}
              yang Berkarakter
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              SMP Qur'an Assyauqi hadir sebagai lembaga pendidikan yang
              memadukan kurikulum nasional dengan nilai-nilai kepesantrenan.
              Kami berkomitmen untuk mencetak generasi yang tidak hanya cerdas
              secara intelektual, tetapi juga memiliki akhlak mulia dan jiwa
              kepemimpinan.
            </p>

            <div className="space-y-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">{point}</p>
                </div>
              ))}
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeiVbj1oUbye_KVPuX1ln60Jt8aTkC3JCmzb943GMXLpIrthA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                className="px-8 py-4 text-lg shadow-lg shadow-primary/30"
              >
                Daftar Sekarang
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seaction__pengenalan;
