import style from "./total.module.css"

const TotalTotal = (props) => {
  return (
    <div className={style.total_shelfNumber}>
      <p className={style.total_shelfNumber_text}>Totally:</p>
      <p className={style.total_shelfNumber_summ}>{props.overlayManuscripts.length} mss</p>
      <button>Order</button>
    </div>
  );
};

export default TotalTotal;
