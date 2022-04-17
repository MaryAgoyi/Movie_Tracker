import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { axiosPrivate } from "../../common/apis/tvShowApi";

const POPULAR_TV_URL = `/tv/popular?api_key=`;
const SEARCH_TV_URL = `/search/tv?api_key=`;



export const popularTvShow = createAsyncThunk(
  "TvShow/popularTvShow",
  async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await axios.get(`${POPULAR_TV_URL}${user.apikey}`);

    return response.data.results;
  }
);



export const favouriteTvShow = createAsyncThunk(
  "TvShow/favouriteTvShow",
  async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await axiosPrivate.get(
      `account/${user.account_id}/favorite/tv?api_key=${user.apikey}&session_id=${user.session_id}`
    );

    return response.data.results;
  }
);

export const searchTvShow = createAsyncThunk(
  "TvShow/searchTvShow",
  async (search) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await axios.get(
      `${SEARCH_TV_URL}${user.apikey}&query=${search}`
    );
  

    return response.data.results;
  }
);


export const searchSeason = createAsyncThunk(
  "TvShow/searchSeason",
  async (tv_id, season_number) => {
  
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await axios.get(
      `/tv/${tv_id}/season/${season_number}?api_key=${user.apikey}`
    );

   
   
    return response.data.results;
  }
);
export const detailsTvShow = createAsyncThunk(
  "TvShow/detailsTvShow",
  async (tv_id) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await axios.get(`/tv/${tv_id}?api_key=${user.apikey}`);
    
    response.data.seasons.map(season=>{
      
      searchSeason(tv_id,season.id)
  
     
})
      
    return response.data;
  }
);
export const sessionShow = createAsyncThunk(
  "TvShow/sessionShow",
  async (tv_id) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await axios.get(`/tv/${tv_id}?api_key=${user.apikey}`);
   
    return response.data;
  }
);



export const tvSearch = createAsyncThunk("TvShow/tvSearch", (search) => {
  return search;
});
export const tvSave = createAsyncThunk("TvShow/tvSave", () => {
  return true;
});
