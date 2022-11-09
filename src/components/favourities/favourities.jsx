import React from "react";
import style from "./favourities.module.css";
import axios from "axios";
import Card from "../card/Card";
import { AppContext } from "../../App";

const Favourites = () => {
  const context = React.useContext(AppContext);

  const onAddToSelected = (addedManuscript) => {
    // Отправляем в серверную часть карточки, которые кнопкой выбрали в Selected:
    axios.post(`${process.env.REACT_APP_API_URL}/cart`, addedManuscript);
    context.setOverlayManuscripts([
      ...context.overlayManuscripts,
      addedManuscript,
    ]); //Добавляем в стейт новый объект
  };

  const onRemoveFromFavourities = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/favourities/${id}`);
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
            <Card
              key={manuscript.id}
              manuscript={manuscript}
              onFavourite={(manuscript) => {
                onRemoveFromFavourities(manuscript.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
