import style from "./header.module.css"

const Header = (props) => {
  return (
    <header>
      <h1 className={style.logo}>TOCHMAC</h1>
      <nav>
        <a className={style.nav_item} href="#">
          FAVOURITIES
        </a>
        <a className={style.nav_item}  onClick={props.openCart} href="#">
        SELECTED
        </a>
      </nav>
    </header>
  );
};

export default Header;
