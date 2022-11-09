import style from "./total.module.css"

const TotalTotal = ({total}) => {
  return (
    <div className={style.total_shelfNumber}>
      <p className={style.total_shelfNumber_text}>Totally:</p>
      <p className={style.total_shelfNumber_summ}>{total} mss</p>
      <button>Order</button>
    </div>
  );
};

export default TotalTotal;
