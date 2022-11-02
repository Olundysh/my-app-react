import style from "./card.module.css";
import React from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../../App";

const Card = (props) => {
const context = React.useContext(AppContext);

  // const [added, setAdded] = React.useState(props.isAdded);
  // const [favourite, setFavourite] = React.useState(props.isFavourite);

  // const [added, setAdded] = React.useState(false);
  // const [favourite, setFavourite] = React.useState(false);

  const onClickPlus = () => {
    let id = props.id;
    let myId = props.myId;
    let title = props.title;
    let description = props.description;
    let shelfNumber = props.shelfNumber;
    let img = props.img;

    props.onPlus({ id, myId, title, description, shelfNumber, img });

    // setAdded(!added);
  };

  const onClickFavouritePlus = () => {
    let id = props.id;
    let myId = props.myId;
    let title = props.title;
    let description = props.description;
    let shelfNumber = props.shelfNumber;
    let img = props.img;

    props.onFavourite({ id, myId, title, description, shelfNumber, img });

    // setFavourite(!favourite);
  };

  return (
    <div className={style.manuscript_item}>
      {props.isLoading ? (
        <ContentLoader
          speed={2}
          width={290}
          height={443}
          viewBox="0 0 303 463"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="56" rx="3" ry="3" width="303" height="266" />
          <rect x="0" y="352" rx="3" ry="3" width="173" height="19" />
          <rect x="0" y="25" rx="3" ry="3" width="183" height="17" />
          <rect x="0" y="370" rx="3" ry="3" width="234" height="23" />
          <rect x="0" y="430" rx="3" ry="3" width="157" height="27" />
          <rect x="220" y="417" rx="3" ry="3" width="74" height="42" />
        </ContentLoader>
      ) : (
        <>
          {context.itemFavourite === true ? (
            <button
              className={style.favourite_btn_added}
              onClick={onClickFavouritePlus}
            >
              Remove from Favourities
            </button>
          ) : (
            <button
              className={style.favourite_btn}
              onClick={onClickFavouritePlus}
            >
              Add to Favourities
            </button>
          )}

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
              className={context.itemAdded(props.id) ? style.add_mss : style.add_mss1}
              onClick={onClickPlus}
            >
              <img
                src={context.itemAdded(props.id) ? "./img/check.png" : "./img/icons8-plus-24.png"}
                alt="add"
              ></img>
            </button>
          </p>
        </>
      )}
    </div>
  );
};
export default Card;
