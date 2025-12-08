import Header from "./page/header";
import VisiMisi from "./page/main/seaction__visiMisi";
import ProgramUnggulan from "./page/main/seaction__programUnggulan";
import Fasilitas from "./page/main/seaction__fasilitas";
import Testimoni from "./page/main/seaction__testimoni";
import Footer from "./page/footer";

const Home = () => {
  return (
    <>      
      <Header />
      <VisiMisi />
      <ProgramUnggulan />
      <Fasilitas />
      <Testimoni />
      <Footer />
    </>
  );
}

export default Home; 