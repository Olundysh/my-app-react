import style from "./selected.module.css";
import { AppContext } from "../../../App";
import { useState, useContext } from "react";

const Selected = ({ manuscript }) => {
  const context = useContext(AppContext);
  const [isBusy, setIsBusy] = useState(false);

  const onRemoveClick = async () => {
    setIsBusy(true);
    await context.removeManuscriptFromOverlay(manuscript.id);
    setIsBusy(false)
  };

  return (
    <div className={style.selected_list}>
      <div className={style.selected_item}>
        <img className={style.selected_img} src={manuscript.img} alt="" />
        <h3 className={style.selected_title}>
          {manuscript.title}
          <br />
          <span className={style.selected_shelfNumber}>
            {manuscript.shelfNumber} T III.
          </span>
        </h3>
        <button onClick={onRemoveClick} className={style.close_btn} disabled={isBusy}>
          X
        </button>
      </div>
    </div>
  );
};

export default Selected;
