import Selected from "./selected/Selected";
import TotalTotal from "./total/TotalTotal";
import style from "./overlay.module.css";
import { AppContext } from "../../App";
import { useContext } from "react";

const Overlay = () => {
  const context = useContext(AppContext);

  return (
    <div className={style.overlay}>
      <div className={style.selected}>
        <div className={style.title}>
          <div className={style.title_block}>
            <h2>Selected</h2>
            <button className={style.close_btn} onClick={context.closeOverlay}>
              {/*В событие onClick прокидываем property-фунцию "closeOverlay", которую мы описали в родительском элементе App. Она состоит в том, что меняет состояние константы overlayOpened (true) на (false) */}
              CLOSE
            </button>
          </div>

          {context.overlayManuscripts.length > 0 ? (
            <div>
              {/* Из элемента App мы прокинули сюда массив-property overlayManuscripts. Теперь мы его мапим: создаем связь ключ-значение, но сами ключи мы прокинем пропсами еще ниже - в элемент Selected. */}
              {context.overlayManuscripts.map((manuscript) => {
                return <Selected key={manuscript.id} manuscript={manuscript} />;
              })}
            </div>
          ) : (
            <h2 className={style.emptySelected}>
              {" "}
              You have no selected manuscripts{" "}
            </h2>
          )}

          <TotalTotal total={context.overlayManuscripts.length} />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
