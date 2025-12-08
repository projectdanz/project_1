import Pendiri from "../../assets/image/pendiri.jpg";
import Ketua from "../../assets/image/ketua.jpg";
import Kepala from "../../assets/image/kepala.jpg";

const Seaction__strukturInti = () => {
  const team = [
    {
      name: "KH. Syarifudin Juhri",
      role: "Pendiri Yayasan",
      image: Pendiri,
    },
    {
      name: "Drs. Sunardi, M.Pd",
      role: "Ketua Yayasan",
      image: Ketua,
    },
    {
      name: "Velantika, S.T M.T",
      role: "Kepala Yayasan",
      image: Kepala,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Struktur Inti Yayasan
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Mengenal para pemimpin yang berdedikasi dalam mengembangkan visi dan
            misi SMP Qur'an Asy Syauqi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">
                  {member.role}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seaction__strukturInti;
