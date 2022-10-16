import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Manuscripts from "./components/products/Manuscripts";
import Footer from "./components/footer/Footer";
import Overlay from "./components/overlay/Overlay";
import TextSection from "./components/textSection/TextSection";

function App() {
  // const [countH2, setCountH2] = React.useState(0);

  // const plus = () => {
  //   setCountH2(countH2 + 1);
  // };

  // const minus = () => {
  //   setCountH2(countH2 - 1);
  // };

  const [cartOpened, setCartOpened] = React.useState(false);
  
  return (
    <div className="app">
      {/* <center>
        <h2>{countH2}</h2>
        <button onClick={plus}>X</button>
        <button onClick={minus}>-</button>
      </center> */}

      {cartOpened ? <Overlay closeCart={() => setCartOpened(false) }/> : null}

      <Header openCart={() => setCartOpened(true)} />
      <Banner />

      <TextSection />

      <Manuscripts />
      <Footer />
    </div>
  );
}

export default App;
