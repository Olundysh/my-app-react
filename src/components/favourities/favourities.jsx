import React from "react";
import style from "./favourities.module.css";
import axios from "axios";
import FavouriteCard from "./favouriteCard/FavouriteCard";

const Favourites = (props) => {
  const onAddToSelected = (addedManuscript) => {
    // Отправляем в серверную часть карточки, которые кнопкой выбрали в Selected:
    axios.post(
      "https://63500d14df22c2af7b61c10a.mockapi.io/cart",
      addedManuscript
    );
    props.setOverlayManuscripts([...props.overlayManuscripts, addedManuscript]); //Добавляем в стейт новый объект
  };

  const onRemoveFromFavourities = (id) => {
    axios.delete(`https://63500d14df22c2af7b61c10a.mockapi.io/favourities/${id}`);
    props.setFavouriteManuscripts((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  return (
    <div className={style.manuscripts_section}>
      <div className={style.mainHeading}>
        <h2>Favourite manuscripts</h2>
      </div>

      <div className={style.manuscripts}>
        {props.favouriteManuscripts.map((manuscript) => {
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
