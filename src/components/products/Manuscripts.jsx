import Card from "./card/Card";
import style from "./manuscripts.module.css";
import React from "react"

const manuscripts = [
  {
    id: 1,
    title: "Udānavarga_(A)",
    description: "Brief description and content of the mss",
    shelfNumber: "20344",
    img: "./img/TocharianMss.jpg",
  },
  {
    id: 2,
    title: "Udānavarga_(B)",
    description: "Brief description and content of the mss",
    shelfNumber: "20344",
    img: "./img/TocharianMss.jpg",
  },
  {
    id: 3,
    title: "Udānavarga_(C)",
    description: "Brief description and content of the mss",
    shelfNumber: "20344",
    img: "./img/TocharianMss.jpg",
  },
  {
    id: 4,
    title: "Udānavarga_(C)",
    description: "Brief description and content of the mss",
    shelfNumber: "20344",
    img: "./img/TocharianMss.jpg",
  },
  {
    id: 5,
    title: "Udānavarga_(C)",
    description: "Brief description and content of the mss",
    shelfNumber: "20344",
    img: "./img/TocharianMss.jpg",
  },
  {
    id: 6,
    title: "Udānavarga_(C)",
    description: "Brief description and content of the mss",
    shelfNumber: "20344",
    img: "./img/TocharianMss.jpg",
  },
];



const Manuscripts = () => {

  return (
    <div className={style.manuscripts_section}>
      <div className={style.search}>
        <h2>All manuscripts</h2>
        <div className={style.search_block}>
          <img src="./img/search.png" alt="search" />
          <input placeholder="Поиск по рукописям"></input>
        </div>
      </div>

      <div className={style.manuscripts}>
        {manuscripts.map((obj) => {
          
          return (
            
            <Card
              // key={obj.id}
              // title={obj.title}
              // description={obj.description}
              // shelfNumber={obj.shelfNumber}
              // img={obj.img}
              {...obj} //Object spread operator

              // onClickPlus={() => {
              //   setAdded(!added)
              // }}
              onClickSelected={() => {
                alert("Вы поместили рукопись " + obj.title + " в избранное.");
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Manuscripts;
