import {Link} from 'react-router-dom'
import style from "./header.module.css"


// "Элемент Header принимает праметры-пропсы с более высокого элемента - App. ";  
// Тэгам мы придаем имена вот таким образом - className={style.logo} - потому что импортируем их из отдельного css-файла (см. в верху страницы)

const Header = (props) => {
  return (
    <header>
       <Link to="/myapp">
      <h1 className={style.logo}>TOCHMAC</h1>
      </Link>
      <nav>
        <Link to="favourities">
        <button className={style.nav_item} href="#">
          FAVOURITIES
        </button>
        </Link>
        <button className={style.nav_item}  onClick={props.openOverlay} href="#"> {/*В событие onClick прокидываем property-фунцию "openOverlay", которую мы описали в родительском элементе App. Она состоит в том, что меняет состояние константы overlayOpened (false) на (true) */}
        SELECTED
        </button>
      </nav>
    </header>
  );
};

export default Header;
