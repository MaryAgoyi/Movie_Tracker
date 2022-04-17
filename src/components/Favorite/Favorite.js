import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { favouriteTvShow } from "../../features/tvShow/TvSliceService";

import Header from "../Header/Header";
import TvFavouriteList from "../TvFavouriteList/TvFavouriteList";

const Favorite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(favouriteTvShow());
  }, [dispatch]);

  return (
    <>
      <Header />
      <TvFavouriteList />
    </>
  );
};

export default Favorite;
