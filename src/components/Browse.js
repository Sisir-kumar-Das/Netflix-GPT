import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
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
