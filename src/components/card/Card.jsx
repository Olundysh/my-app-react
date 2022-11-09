import style from "./card.module.css";
import { useState, useContext } from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../App";

const Card = ({ manuscript, isLoading, onFavourite }) => {
  const context = useContext(AppContext);

  const [isPlusBusy, setIsPlusBusy] = useState(false);
  const isAddedToOverlay = context.isItemAdded(manuscript?.id);

  const onPlusClick = async () => {
    setIsPlusBusy(true);
    await (isAddedToOverlay ? context.removeManuscriptFromOverlay(manuscript.id) :  context.addManuscriptToOverlay(manuscript.id));
    setIsPlusBusy(false);
  };

 

  const onClickFavouritePlus = () => {
    onFavourite(manuscript);
  };

  return (
    <div className={style.manuscript_item}>
      {isLoading ? (
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
          {context.itemFavourite(manuscript.id) ? (
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
            src={manuscript.img}
            alt="Tocharian mss"
          />
          <p className={style.manuscript_title}>{manuscript.title}</p>
          <p className={style.manuscript_description}>
            {manuscript.description}
          </p>
          <p className={style.shelfNumber}>Shelf number</p>

          <p className={style.manuscript_shelfNumber}>
            <span>{manuscript.shelfNumber} T III</span>
            <button disabled={isPlusBusy}
              className={
               isAddedToOverlay
                  ? style.add_mss
                  : style.add_mss1
              }
              onClick={onPlusClick}
            >
              <img
                src={
                  isAddedToOverlay
                    ? "./img/check.png"
                    : "./img/icons8-plus-24.png"
                }
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
