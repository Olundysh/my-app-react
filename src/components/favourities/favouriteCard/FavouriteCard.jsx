import style from "./favouriteCard.module.css";
import React from "react";

const FavouriteCard = (props) => {
  const [added, setAdded] = React.useState(false);
  const [favourite, setFavourite] = React.useState(true);

  const onClickPlus = () => {
    let id = props.id;
    let title = props.title;
    let description = props.description;
    let shelfNumber = props.shelfNumber;
    let img = props.img;

    props.onPlus({ id, title, description, shelfNumber, img });

    setAdded(!added);
  };

  const onClickRemoveFromFavourities = () => {
    props.onRemoveFromFavourities(props.id);

    // setFavourite(!favourite);
  };

  return (
    <div className={style.manuscript_item}>
      {/* {favourite === true ? (
        <button className={style.favourite_btn_added} onClick={onClickFavouritePlus}>
          Added to Favourities
        </button>
      ) : (
        <button className={style.favourite_btn} onClick={onClickFavouritePlus}>
          Add to Favourities
        </button>
      )} */}

      <button
        className={style.favourite_btn_added}
        onClick={onClickRemoveFromFavourities}
      >
        Remove from Favourities
      </button>

      <img
        className={style.manuscript_img}
        src={props.img}
        alt="Tocharian mss"
      />
      <p className={style.manuscript_title}>{props.title}</p>
      <p className={style.manuscript_description}>{props.description}</p>
      <p className={style.shelfNumber}>Shelf number</p>

      <p className={style.manuscript_shelfNumber}>
        <span>{props.shelfNumber} T III</span>
        <button
          className={added ? style.add_mss : style.add_mss1}
          onClick={onClickPlus}
        >
          <img
            src={added ? "./img/check.png" : "./img/icons8-plus-24.png"}
            alt="add"
          ></img>
        </button>
      </p>
    </div>
  );
};
export default FavouriteCard;
