import "./App.css";

import Banner from "./components/Banner/Banner.jsx";
import Classes from "./components/classes-rpg/Classes.jsx";
import History from "./components/History/History.jsx";
import Map from "./components/Map/Map.jsx";
import Races from "./components/Races/Races.jsx";

function App() {
  return (
    <div>
      <Banner />
      <History />
      <Map />
      <Races />
      <Classes />
    </div>
  );
}

export default App;
