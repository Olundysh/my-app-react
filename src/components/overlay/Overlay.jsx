import Selected from "./selected/Selected";
import TotalTotal from "./total/TotalTotal";
import style from "./overlay.module.css";

const overlay = [
  {
    id: 1,
    title: "Udānavarga_(A)",
    shelfNumber: "20344",
    img: "/img/TocharianMss.jpg",
  },
  {
    id: 2,
    title: "Udānavarga_(B)",
    shelfNumber: "20344",
    img: "/img/TocharianMss.jpg",
  },
  {
    id: 3,
    title: "Udānavarga_(С)",
    shelfNumber: "20344",
    img: "/img/TocharianMss.jpg",
  },
];

const Overlay = (props) => {
  return (
    <div className={style.overlay}>
      <div className={style.selected}>
        <div className={style.title}>
          <div className={style.title_block}>
            <h2>Selected</h2>
            <button className={style.close_btn} onClick={props.closeCart}>
              CLOSE
            </button>
          </div>
          <div className="manuscript_item">
            {overlay.map((obj) => {
              return (
                <Selected
                  // key={obj.id}
                  // title={obj.title}
                  // shelfNumber={obj.shelfNumber}
                  // img={obj.img}
                  {...obj} //Object spread operator
                />
              );
            })}
          </div>
          <TotalTotal />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
