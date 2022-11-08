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
          <h3 className={style.slider}>The Tocharian (sometimes Tokharian) languages, also known as Arśi-Kuči, Agnean-Kuchean or Kuchean-Agnean, are an extinct branch of the Indo-European language family spoken by inhabitants of the Tarim Basin, the Tocharians.</h3>
        </div>
        <div>
          <h3 className={style.slider}>The languages are known from manuscripts dating from the 5th to the 8th century AD, which were found in oasis cities on the northern edge of the Tarim Basin (now part of Xinjiang in northwest China) and the Lop Desert.</h3>
        </div>
        <div>
          <h3 className={style.slider}>The discovery of these languages in the early 20th century contradicted the formerly prevalent idea of an east–west division of the Indo-European language family as Centum and satem languages.</h3>
        </div>
        <div>
          <h3 className={style.slider}>Scholars studying these manuscripts in the early 20th century identified their authors with the Tokharoi, a name used in ancient sources for people of Bactria (Tokharistan). Although this identification is now believed to be mistaken, "Tocharian" remains the usual term for these languages.</h3>
        </div>
        <div>
          <h3 className={style.slider}>The oldest extant manuscripts in Tocharian B are now dated to the 5th or even late 4th century AD, making Tocharian a language of Late Antiquity contemporary with Gothic, Classical Armenian, and Primitive Irish.</h3>
        </div>
        <div>
          <h3 className={style.slider}>Tocharian is documented in manuscript fragments, mostly from the 8th century (with a few earlier ones) that were written on palm leaves, wooden tablets, and Chinese paper, preserved by the extremely dry climate of the Tarim Basin.</h3>
        </div>
      </Slider>
    </div>
    
}
</>)}

export default TextSection;
