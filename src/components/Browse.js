import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Browse;
