import Banner from "./components/banner/Banner";
import TextSection from "./components/textSection/TextSection";
import Manuscripts from "./components/manuscripts/Manuscripts";

const Home = (props) => {
    return(
<>
                <Banner />
                <TextSection />
                <Manuscripts
                  manuscripts={props.manuscripts}
                  overlayManuscripts={props.overlayManuscripts}
                  favouriteManuscripts={props.favouriteManuscripts}
                  setFavouriteManuscripts={props.setFavouriteManuscripts}
                  setOverlayManuscripts={props.setOverlayManuscripts}
                  setSearch={props.setSearch}
                  search={props.search}
                />
              </>)
 }

 export default Home;