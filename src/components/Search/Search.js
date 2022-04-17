import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { detailsTvShow} from "../../features/tvShow/TvSliceService";
import Header from "../Header/Header";
import TvSearchList from "../TvSearchList/TvSearchList";


const Search = () => {
const newItem = useSelector((state) => state.tvShow.searchedTvShow);
const dispatch =useDispatch()

const item = useSelector((state) => state.tvShow.viewedTvShow);
localStorage.setItem("view", JSON.stringify(item))

newItem.map(tv=>{
  
   
      dispatch(detailsTvShow(tv.id));

 

})

  return (
    <>
   
    <Header/>
     <TvSearchList />
   
    </>
  )

}
export default Search
