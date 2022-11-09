import axios from "axios";
import Card from "../card/Card";
import style from "./manuscripts.module.css";
import React from "react";

const Manuscripts = (props) => {
  

  const onAddToFavourities = async (addedFavouriteManuscript) => {
    try {
      const findFavouriteManuscript = props.favouriteManuscripts.find(
        (favouriteItem) => favouriteItem.myId === addedFavouriteManuscript.myId
      );
      if (findFavouriteManuscript) {
        await axios.delete(
          `${process.env.REACT_APP_API_URL}/favourities/${findFavouriteManuscript.id}`
        );
        props.setFavouriteManuscripts(props.favouriteManuscripts.filter((item) => Number(item.id) !== findFavouriteManuscript.id));
  
      } else {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/favourities`,
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
      (manuscript) => {
        return (
          <Card
            key={manuscript?.id}
            manuscript={manuscript}
            isLoading={props.loading}
            
            onFavourite={(favouriteManuscript) => {
              onAddToFavourities(favouriteManuscript);
            }}
            // onPlus={(selectedManuscript) => {
            //   onAddToSelected(selectedManuscript);
            // }}
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
