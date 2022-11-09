import React, { useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Overlay from "./components/overlay/Overlay";
import Favourites from "./components/favourities/favourities";
import Home from "./Home";
import api from "./shared/api";

export const AppContext = React.createContext({});

function App() {
  //Этот массив - состояние для хранения данных карточек-рукописей - сюда приходят данные из mocapi, мы получаем оттуда массив.
  const [manuscripts, setManuscripts] = useState([]);

  //Устанавливаем состояние "overlayOpened" для открытия боковой панели - оно boolean, т.е. либо открыта, либо закрыта; по умолчанию панель закрыта; функция-property "openOverlay" будет прописана на этой же странице, в <Header/>, чтобы передать-прокинуть ее ниже - непосредственно в сам jsx-элемент Header.
  const [overlayOpened, setOverlayOpened] = useState(false);

  
  const [overlayManuscriptIds, setOverlayManuscriptIds] = useState([]);

  //Этот массив - состояние для хранения данных из Favourites
  const [favouriteManuscripts, setFavouriteManuscripts] = useState([]);

  // Эта "Строка" - состояние для поиска, который мы будем проводить в элементе <Manuscripts>.
  const [search, setSearch] = useState("");

  // state для хранения состояния загрузки
  const [loading, setLoading] = useState(true);

  const overlayManuscripts = overlayManuscriptIds.map((id)=>manuscripts.find(m => m.id === id));
  console.log(overlayManuscripts, overlayManuscriptIds)

  React.useEffect(() => {
    async function axiosData() {
      const overlayData = await axios.get(
        `${process.env.REACT_APP_API_URL}/cart`
      );
      const favouritiesData = await axios.get(
        `${process.env.REACT_APP_API_URL}/favourities`
      );
      const manuscriptsData = await axios.get(
        `${process.env.REACT_APP_API_URL}/products`
      );

      setLoading(false);

      setOverlayManuscriptIds(overlayData.data.map(({id}) => id));
      setFavouriteManuscripts(favouritiesData.data);
      setManuscripts(manuscriptsData.data);
    }

    axiosData();
  }, []);

  //Удаление из Selected:
  const onRemoveOverlayItem = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/cart/${id}`);
    setOverlayManuscriptIds((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  const removeManuscriptFromOverlay = async (id) => {
    try {
      await api.removeFromOverlay(id);
      setOverlayManuscriptIds(
        overlayManuscriptIds.filter((mid) => mid !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const addManuscriptToOverlay = async (id) => {
    try {
      await api.addManuscriptToOverlay({id});
      setOverlayManuscriptIds([...overlayManuscriptIds, id]);
    } catch (err) {
      console.log(err);
    }
  };

  const isItemAdded = (id) => {
    return overlayManuscriptIds.some((mid) => mid === id);
  };
  const itemFavourite = (id) => {
    return favouriteManuscripts.some((objFavourite) => objFavourite.id === id);
  };
  const closeOverlay = () => setOverlayOpened(false)

  return (
    <AppContext.Provider
      value={{
        manuscripts,
        overlayManuscripts,
        favouriteManuscripts,
        overlayOpened,
        closeOverlay,
        setOverlayOpened,
        setManuscripts,
        setFavouriteManuscripts,
        isItemAdded,
        itemFavourite,

        addManuscriptToOverlay,
        removeManuscriptFromOverlay
      }}
    >
      <div className="app">
        {overlayOpened ? (
          <Overlay
            onRemoveOverlayItem={onRemoveOverlayItem}
            overlayManuscripts={overlayManuscripts}
          />
        ) : null}
        {/* Прописываем тернарный оператор: {При условии, что overlayOpened(true)=это константа, которую мы прописали здесь же, выше на странице ? (на странице будет отображаться jsx-элемент <Overlay/>, со всеми своими пропсами) : в противном случае вместо этого элемента не будет ничего = null} */}
        {/* Внутри jsx-элемента <Overlay/> прописываем функцию-property "closeOverlay": она состоит в том, чтобы установить состояние setOverlayOpened(false). После этого идем в элемент Overlay, где укажем - в каком моменте эта функция-property должна реализовываться */}
        {/* Внутри jsx-элемента <Overlay/> прописываем массив-property "overlaytItems": Из каких объектов он состоит, мы можем узнать только если спустимся ниже по элементам. После этого идем в элемент Overlay, где укажем - в каком моменте этот массив-property будет использоваться, и из каких элементов он будет состоять. */}

        <Header openOverlay={() => setOverlayOpened(true)} />
        <Routes>
          <Route path="/favourities" element={<Favourites />} />

          <Route
            path="/"
            element={
              <Home
                manuscripts={manuscripts}
                overlayManuscripts={overlayManuscriptIds}
                setOverlayManuscripts={setOverlayManuscriptIds}
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
