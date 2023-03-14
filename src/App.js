/** @format */
import Screen from "./components/Screen";
import img1 from "./images/screen-1.jpg";
import img2 from "./images/screen-2.jpg";
// import img3 from "./images/screen-3.jpg";
// import img4 from "./images/screen-4.jpg";
import img5 from "./images/screen-5.jpg";
import img6 from "./images/screen-6.jpg";

import Blob from "./components/Blob";
import "./blob.css";

import HackerText from "./components/HackerText";
import "./hackertext.css";

import ParticleCanvas from "./components/ParticleCanvas";
import "./particlecanvas.css";

function App() {
  return (
    <div className="app">
      {/* <HackerText textEffect="MY REACT COMPONENTS" />
      <HackerText textEffect="MWAHAHAHAHA" /> */}
      <div className="container">
        <ParticleCanvas />
        {/* <Screen
          id="img1"
          image={img1}
          alt="Angkor Wat Cambodia Synth Wave Universe"
        />
        <Screen
          id="img2"
          image={img2}
          alt="Angkor Wat Cambodia Synth Wave Universe"
        /> */}
        {/* <Screen
        id="img3"
        image={img3}
        alt="Angkor Wat Cambodia Synth Wave Universe"
      />
      <Screen
        id="img4"
        image={img4}
        alt="Angkor Wat Cambodia Synth Wave Universe"
      /> */}
        {/* <Screen
          id="img5"
          image={img5}
          alt="Angkor Wat Cambodia Synth Wave Universe"
        />
        <Screen
          id="img6"
          image={img6}
          alt="Angkor Wat Cambodia Synth Wave Universe"
        /> */}
      </div>
      <Blob />
    </div>
  );
}

export default App;
