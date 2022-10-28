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

function App() {
  const [overlayOpened, setOverlayOpened] = React.useState(false); //Устанавливаем состояние "overlayOpened" для открытия боковой панели - оно boolean, т.е. либо открыта, либо закрыта; по умолчанию панель закрыта; функция-property "openOverlay" будет прописана на этой же странице, в <Header/>, чтобы передать-прокинуть ее ниже - непосредственно в сам jsx-элемент Header.

  const [manuscripts, setManuscripts] = React.useState([]); //Этот массив - состояние для хранения данных карточек-рукописей - сюда приходят данные из mocapi, мы получаем оттуда массив.

  const [overlayManuscripts, setOverlayManuscripts] = React.useState([]); //Этот массив - состояние для хранения данных из избранного Selected - сюда через сложный путь приходят данные из Card, который получает их из Manuscripts, который получает их из App, куда они приходят из mocapi.

  const [favouriteManuscripts, setFavouriteManuscripts] = React.useState([]);

  const [search, setSearch] = React.useState(""); // Эта "Строка" - состояние для поиска, который мы будем проводить в элементе <Manuscripts>.

  React.useEffect(() => {
    axios // Получаем массив с данными из бэкенда через mocapi/axios:
      .get("https://63500d14df22c2af7b61c10a.mockapi.io/products")
      .then((res) => {
        setManuscripts(res.data);
      });
    axios // Передаем массив с данными с фронтэнда черAез mocapi/axios в бэкэнд:
      .get("https://63500d14df22c2af7b61c10a.mockapi.io/cart")
      .then((res) => {
        setOverlayManuscripts(res.data);
      });
  }, []);

  //Удаление из Selected:
  const onRemoveCartItem = (id) => {
    axios.delete(`https://63500d14df22c2af7b61c10a.mockapi.io/cart/${id}`);
    setOverlayManuscripts((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  return (
    <div className="app">
      {overlayOpened ? (
        <Overlay
          onRemoveCartItem={onRemoveCartItem}
          overlayManuscripts={overlayManuscripts}
          closeOverlay={() => setOverlayOpened(false)}
        />
      ) : null}
      {/* Прописываем тернарный оператор: {При условии, что overlayOpened(true)=это константа, которую мы прописали здесь же, выше на странице ? (на странице будет отображаться jsx-элемент <Overlay/>, со всеми своими пропсами) : в противном случае вместо этого элемента не будет ничего = null} */}
      {/* Внутри jsx-элемента <Overlay/> прописываем функцию-property "closeOverlay": она состоит в том, чтобы установить состояние setOverlayOpened(false). После этого идем в элемент Overlay, где укажем - в каком моменте эта функция-property должна реализовываться */}
      {/* Внутри jsx-элемента <Overlay/> прописываем массив-property "overlaytItems": Из каких объектов он состоит, мы можем узнать только если спустимся ниже по элементам. После этого идем в элемент Overlay, где укажем - в каком моменте этот массив-property будет использоваться, и из каких элементов он будет состоять. */}

      <Header openOverlay={() => setOverlayOpened(true)} />
      <div>
        <Routes>
          <Route
            path="/favourities"
            element={
              <Favourites
                favouriteManuscripts={favouriteManuscripts}
                setFavouriteManuscripts={setFavouriteManuscripts}
                overlayManuscripts={overlayManuscripts}
                setOverlayManuscripts={setOverlayManuscripts}
              />
            }
          />

          <Route
            path="/"
            element={
              <Home
                manuscripts={manuscripts}
                overlayManuscripts={overlayManuscripts}
                favouriteManuscripts={favouriteManuscripts}
                setFavouriteManuscripts={setFavouriteManuscripts}
                setOverlayManuscripts={setOverlayManuscripts}
                setSearch={setSearch}
                search={search}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
