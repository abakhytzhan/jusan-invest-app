import Award from "../../components/award/award";
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";

const Home = () => {
  const searchIcon: boolean = true;
  return (
    <>
      <Header searchIcon={searchIcon} />
      <Slider />
      <Award />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
