import axios from "axios";
import Card from "./card/Card";
import style from "./manuscripts.module.css";
import React from "react";

// "Элемент Manuscripts принимает праметры-пропсы с более высокого элемента - App. ";
// Тэгам мы придаем имена вот таким образом - className={style.manuscripts_section} - потому что импортируем их из отдельного css-файла (см. в верху страницы)

const Manuscripts = (props) => {
  const onAddToSelected = async (addedManuscript) => {
    try {
      const findOverlayManuscripts = props.overlayManuscripts.find(
        (overLayItem) => overLayItem.myId === addedManuscript.myId
      );
      if (findOverlayManuscripts) {
        axios.delete(
          `http://localhost:3001/cart/${findOverlayManuscripts.id}`
        );
        props.setOverlayManuscripts((prev) =>
          prev.filter(
            (overLayItem) => overLayItem.myId !== addedManuscript.myId
          )
        );
      } else {
        // Отправляем в серверную часть карточки, которые кнопкой выбрали в Selected:
        const { data } = await axios.post(
          "http://localhost:3001/cart",
          addedManuscript
        );
        props.setOverlayManuscripts([...props.overlayManuscripts, data]); //Добавляем в стейт новый объект
      }
    } catch {
      alert("Failed to add the manuscript to Selected");
    }
  };

  const onAddToFavourities = async (addedFavouriteManuscript) => {
    try {
      const findFavouriteManuscript = props.favouriteManuscripts.find(
        (favouriteItem) => favouriteItem.myId === addedFavouriteManuscript.myId
      );
      if (findFavouriteManuscript) {
        axios.delete(
          `http://localhost:3001/favourities/${findFavouriteManuscript.id}`
        );
      } else {
        const { data } = await axios.post(
          "http://localhost:3001/favourities",
          addedFavouriteManuscript
        );
        props.setFavouriteManuscripts([...props.favouriteManuscripts, data]);
      }
    } catch {
      alert("Failed to add the manuscript to your favourites list");
    }
  };

 

  const onSearchInput = (inputValue) => {
    props.setSearch(inputValue.target.value);
  };

  const renderManuscript = () => {
    const filterManuscripts = props.manuscripts.filter((manuscript) =>
      manuscript.title.toLowerCase().includes(props.search.toLowerCase())
    );

    return (props.loading ? [...Array(6)] : filterManuscripts).map(
      (manuscripts, index) => {
        return (
          <Card
            key={index}
            {...manuscripts}
            isLoading={props.loading}
            
            onFavourite={(favouriteManuscript) => {
              onAddToFavourities(favouriteManuscript);
            }}
            onPlus={(selectedManuscript) => {
              onAddToSelected(selectedManuscript);
            }}
          />
        );
      }
    );
  };

  return (
    <div className={style.manuscripts_section}>
      <div className={style.search}>
        <h2>
          {props.search ? "Search by: " + props.search : "All manuscripts"}
        </h2>
        <div className={style.search_block}>
          <img src="./img/search.png" alt="search" />
          <input
            onChange={onSearchInput}
            placeholder="Search by manuscripts"
          ></input>
        </div>
      </div>

      <div className={style.manuscripts}>{renderManuscript()}</div>
    </div>
  );
};
export default Manuscripts;
