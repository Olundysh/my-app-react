import style from "./card.module.css";
import React from "react"



const Card = (props) => {

const [added, setAdded] = React.useState(false);

const onClickPlus = () => {
 let title = props.title
 let description = props.description
 let shelfNumber = props.shelfNumber
 let img = props.img

props.onPlus({title, description, shelfNumber, img})

setAdded(!added)
 }

  return (
    <div className={style.manuscript_item}>
      <button className={style.favourite_btn} onClick={props.onClickSelected}>{added ? "Added to Favourities" : "Add to Favourities"}</button>

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
        <button className={added ? style.add_mss : style.add_mss1} onClick={onClickPlus}>
          <img src={added ? "./img/check.png" : "./img/icons8-plus-24.png"} alt="add"></img>
        </button>
      </p>
    </div>
  );
  }
export default Card;
