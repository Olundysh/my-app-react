import style from "./selected.module.css";

const Selected = (props) => {
  return(
    <div className={style.selected_list}>
      <div className={style.selected_item}>
        <img className={style.selected_img} src={props.img} alt="" />
        <h3 className={style.selected_title}>
          {props.title}
          <br />
          <span className={style.selected_shelfNumber}>
            {props.shelfNumber} T III.
          </span>
        </h3>
        <button className={style.close_btn}>X</button>
      </div>
    </div>
  )
};

export default Selected;
