import Selected from "./selected/Selected";
import TotalTotal from "./total/TotalTotal";
import style from "./overlay.module.css";

// "Элемент Overlay принимает праметры-пропсы с более высокого элемента - App. ";
// Тэгам мы придаем имена вот таким образом - className={style.overlay} - потому что импортируем их из отдельного css-файла (см. в верху страницы)

const Overlay = (props) => {
  return (
    <div className={style.overlay}>
      <div className={style.selected}>
        <div className={style.title}>
          <div className={style.title_block}>
            <h2>Selected</h2>
            <button className={style.close_btn} onClick={props.closeOverlay}>
              {/*В событие onClick прокидываем property-фунцию "closeOverlay", которую мы описали в родительском элементе App. Она состоит в том, что меняет состояние константы overlayOpened (true) на (false) */}
              CLOSE
            </button>
          </div>

          {props.overlayManuscripts.length > 0 ? (
            <div>
              {/* Из элемента App мы прокинули сюда массив-property overlayManuscripts. Теперь мы его мапим: создаем связь ключ-значение, но сами ключи мы прокинем пропсами еще ниже - в элемент Selected. */}
              {props.overlayManuscripts.map((obj) => {
                return (
                  <Selected
                    key={obj.id}
                    id={obj.id}
                    title={obj.title}
                    shelfNumber={obj.shelfNumber}
                    img={obj.img}
                    onRemoveCartItem={props.onRemoveCartItem}
                  />
                );
              })}
            </div>
          ) : (
            <h2 className={style.emptySelected}>
              {" "}
              You have no selected manuscripts{" "}
            </h2>
          )}

          <TotalTotal overlayManuscripts={props.overlayManuscripts} />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
