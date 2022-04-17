import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { popularTvShow } from "../../features/tvShow/TvSliceService";
import Header from "../Header/Header";
import TvShowList from "../TvShowList/TvShowList";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(popularTvShow());
  }, [dispatch]);

  return (
    <>
      <Header />
      <TvShowList />
    </>
  );
};
export default Home;
