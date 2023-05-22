import { KEY } from "../../api/apiKey";
import Award from "../../components/award/award";
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";

const Home = () => {
  const searchIcon: boolean = true;
  if (!KEY) {
    alert(
      "There is no API KEY in ../../api/apiKey.ts file. Please purchase the API KEY on the website https://polygon.io/"
    );
  }
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
