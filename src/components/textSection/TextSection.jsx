import style from "./textSection.module.css";
import React from "react"
import Slider from "react-slick";
import { AppContext } from "../../App";


const TextSection = () => {
  const context = React.useContext(AppContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
  
   return(
     <>
{context.overlayOpened ? 
  null :  <div className={style.text_section}>
      <h2 className={style.h2_slider}>About</h2>
      <Slider {...settings}>
        <div>
          <h3 className={style.slider}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem inventore dolor obcaecati, blanditiis tempora accusantium doloremque possimus perferendis earum repudiandae natus animi sapiente eos qui magni quo quos sunt.</h3>
        </div>
        <div>
          <h3 className={style.slider}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ab modi. Natus assumenda fuga inventore illo ipsam, quasi similique provident iusto. Laboriosam enim doloremque culpa perferendis alias quas cupiditate quod?</h3>
        </div>
        <div>
          <h3 className={style.slider}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse totam architecto sint! Aliquid rem voluptatibus asperiores commodi unde, culpa similique vitae? Atque voluptate ipsam natus modi culpa reprehenderit, impedit tempore!</h3>
        </div>
        <div>
          <h3 className={style.slider}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorum dignissimos tempora harum in vel maxime deserunt! In cum perspiciatis, voluptates nam rem voluptatem, officia consequatur necessitatibus officiis qui minus.</h3>
        </div>
        <div>
          <h3 className={style.slider}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error minus sed hic vero, ratione cupiditate harum in, tempore fugiat explicabo doloribus cumque. Hic eveniet libero nam rerum modi sapiente pariatur?</h3>
        </div>
        <div>
          <h3 className={style.slider}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo optio consectetur nesciunt voluptate nemo eligendi quaerat delectus quibusdam error, numquam esse vero. Magni, perferendis autem. Aliquid hic recusandae quos animi?</h3>
        </div>
      </Slider>
    </div>
    
}
</>)}

export default TextSection;
