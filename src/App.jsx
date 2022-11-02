import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Overlay from "./components/overlay/Overlay";
import Favourites from "./components/favourities/favourities";
import Home from "./Home";

export const AppContext = React.createContext({})

function App() {

  

  

  //Этот массив - состояние для хранения данных карточек-рукописей - сюда приходят данные из mocapi, мы получаем оттуда массив.
  const [manuscripts, setManuscripts] = React.useState([]);

  //Устанавливаем состояние "overlayOpened" для открытия боковой панели - оно boolean, т.е. либо открыта, либо закрыта; по умолчанию панель закрыта; функция-property "openOverlay" будет прописана на этой же странице, в <Header/>, чтобы передать-прокинуть ее ниже - непосредственно в сам jsx-элемент Header.
  const [overlayOpened, setOverlayOpened] = React.useState(false);

  //Этот массив - состояние для хранения данных из избранного Selected - сюда через сложный путь приходят данные из Card, который получает их из Manuscripts, который получает их из App, куда они приходят из mocapi.
  const [overlayManuscripts, setOverlayManuscripts] = React.useState([]);

  //Этот массив - состояние для хранения данных из Favourites
  const [favouriteManuscripts, setFavouriteManuscripts] = React.useState([]);

  // Эта "Строка" - состояние для поиска, который мы будем проводить в элементе <Manuscripts>.
  const [search, setSearch] = React.useState("");

  // state для хранения состояния загрузки
  const [loading, setLoading] = React.useState(true);

  
  React.useEffect(() => {
    async function axiosData() {
      const overlayData = await axios.get(
        "http://localhost:3001/cart"
      );
      const favouritiesData = await axios.get(
        "http://localhost:3001/favourities"
      );
      const manuscriptsData = await axios.get(
        "http://localhost:3001/products"
      );

      setLoading(false)

      setOverlayManuscripts(overlayData.data);
      setFavouriteManuscripts(favouritiesData.data);
      setManuscripts(manuscriptsData.data);
    }

    axiosData();
  }, []);

  //Удаление из Selected:
  const onRemoveOverlayItem = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`);
    setOverlayManuscripts((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };


const itemAdded = (id) => {return overlayManuscripts.some((objOverlay) => objOverlay.id === id)}
const itemFavourite = (id) => {
  return overlayManuscripts.some(objFavourite => objFavourite.id === id)
}

  return (
<AppContext.Provider value={{manuscripts, overlayManuscripts, favouriteManuscripts, overlayOpened, setOverlayOpened, setManuscripts, setFavouriteManuscripts, setOverlayManuscripts, itemAdded, itemFavourite}}>
    <div className="app">
      {overlayOpened ? (
        <Overlay
          onRemoveOverlayItem={onRemoveOverlayItem}
          overlayManuscripts={overlayManuscripts}
          closeOverlay={() => setOverlayOpened(false)}
        />
      ) : null}
      {/* Прописываем тернарный оператор: {При условии, что overlayOpened(true)=это константа, которую мы прописали здесь же, выше на странице ? (на странице будет отображаться jsx-элемент <Overlay/>, со всеми своими пропсами) : в противном случае вместо этого элемента не будет ничего = null} */}
      {/* Внутри jsx-элемента <Overlay/> прописываем функцию-property "closeOverlay": она состоит в том, чтобы установить состояние setOverlayOpened(false). После этого идем в элемент Overlay, где укажем - в каком моменте эта функция-property должна реализовываться */}
      {/* Внутри jsx-элемента <Overlay/> прописываем массив-property "overlaytItems": Из каких объектов он состоит, мы можем узнать только если спустимся ниже по элементам. После этого идем в элемент Overlay, где укажем - в каком моменте этот массив-property будет использоваться, и из каких элементов он будет состоять. */}

      <Header openOverlay={() => setOverlayOpened(true)} />
        <Routes>
          <Route
            path="/favourities"
            element={
              <Favourites
              />
            }
          />

          <Route
            path="/"
            element={
              <Home
                manuscripts={manuscripts}
                overlayManuscripts={overlayManuscripts}
                setOverlayManuscripts={setOverlayManuscripts}
                favouriteManuscripts={favouriteManuscripts}
                setFavouriteManuscripts={setFavouriteManuscripts}
                search={search}
                setSearch={setSearch}
                loading={loading}
            
              />
            }
          />
        </Routes>
      <Footer />
    </div>
    </AppContext.Provider>
  );
}

export default App;
