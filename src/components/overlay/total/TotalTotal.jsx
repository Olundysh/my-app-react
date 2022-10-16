import style from "./total.module.css"

const TotalTotal = () => {
  return (
    <div className={style.total_shelfNumber}>
      <p className={style.total_shelfNumber_text}>Totally:</p>
      <p className={style.total_shelfNumber_summ}>mss</p>
      <button>Order</button>
    </div>
  );
};

export default TotalTotal;
