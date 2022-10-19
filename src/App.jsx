import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Manuscripts from "./components/products/Manuscripts";
import Footer from "./components/footer/Footer";
import Overlay from "./components/overlay/Overlay";
import TextSection from "./components/textSection/TextSection";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  const [manuscripts, setManuscripts] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    fetch("https://63500d14df22c2af7b61c10a.mockapi.io/products")
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        setManuscripts(myJson);
      });
  }, []);

  return (
    <div className="app">
      {cartOpened ? (
        <Overlay cartItems={cartItems} closeCart={() => setCartOpened(false)} />
      ) : null}

      <Header openCart={() => setCartOpened(true)} />
      <Banner />

      <TextSection />

      <Manuscripts
        items={manuscripts}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setSearch={setSearch}
        search={search}
      />
      <Footer />
    </div>
  );
}

export default App;
