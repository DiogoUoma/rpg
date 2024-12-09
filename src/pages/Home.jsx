import Banner from "../components/Components_Home/Banner/Banner.jsx";
import Classes from "../components/Components_Home/classes-rpg/Classes.jsx";
import History from "../components/Components_Home/History/History.jsx";
import Map from "../components/Components_Home/Map/Map.jsx";
import Races from "../components/Components_Home/Races/Races.jsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <History />
      <Map />
      <Races />
      <Classes />
    </div>
  );
};

export default Home;
