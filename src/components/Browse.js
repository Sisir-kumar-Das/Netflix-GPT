import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header></Header>
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContainer
          - VideoBackGround
          - VideoTitle
        SecondaryContainer
          - MovieList * n
          - Cards * n
        */}
    </div>
  );
};

export default Browse;
