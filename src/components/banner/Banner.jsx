import style from "./banner.module.css";


const Banner = () => {
  return (
    <div className={style.banner_section}>

      
      <div className={style.banner}>
        <p className={style.text_banner}>
          Tocharian <br /> <span>manuscript culture</span>
          <br />
          <button className={style.banner_btn}>Learn more</button>
        </p>
      </div>
    </div>
  );
};

export default Banner;
