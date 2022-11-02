import Banner from "./components/banner/Banner";
import TextSection from "./components/textSection/TextSection";
import Manuscripts from "./components/manuscripts/Manuscripts";

const Home = (props) => {
  return (
    <>
      <Banner />
      <TextSection />
      <Manuscripts
        manuscripts={props.manuscripts}
        overlayManuscripts={props.overlayManuscripts}
        setOverlayManuscripts={props.setOverlayManuscripts}
        favouriteManuscripts={props.favouriteManuscripts}
        setFavouriteManuscripts={props.setFavouriteManuscripts}
        search={props.search}
        setSearch={props.setSearch}
        loading={props.loading}
      />
    </>
  );
};

export default Home;
