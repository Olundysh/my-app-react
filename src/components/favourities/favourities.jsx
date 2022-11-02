import React from "react";
import style from "./favourities.module.css";
import axios from "axios";
import FavouriteCard from "./favouriteCard/FavouriteCard";
import { AppContext } from "../../App";

const Favourites = () => {
  const context = React.useContext(AppContext);

  const onAddToSelected = (addedManuscript) => {
    // Отправляем в серверную часть карточки, которые кнопкой выбрали в Selected:
    axios.post("http://localhost:3001/cart", addedManuscript);
    context.setOverlayManuscripts([
      ...context.overlayManuscripts,
      addedManuscript,
    ]); //Добавляем в стейт новый объект
  };

  const onRemoveFromFavourities = (id) => {
    axios.delete(`http://localhost:3001/favourities/${id}`);
    context.setFavouriteManuscripts((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  return (
    <div className={style.manuscripts_section}>
      <div className={style.mainHeading}>
        <h2>Favourite manuscripts</h2>
      </div>

      <div className={style.manuscripts}>
        {context.favouriteManuscripts.map((manuscript) => {
          return (
            <FavouriteCard
              key={manuscript.id}
              id={manuscript.id}
              title={manuscript.title}
              description={manuscript.description}
              shelfNumber={manuscript.shelfNumber}
              img={manuscript.img}
              onRemoveFromFavourities={(id) => {
                onRemoveFromFavourities(id);
              }}
              onPlus={(selectedManuscript) => {
                onAddToSelected(selectedManuscript);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
