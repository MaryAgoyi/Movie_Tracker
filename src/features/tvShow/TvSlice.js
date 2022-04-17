import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import {popularTvShow, searchTvShow,
   searchSeason,detailsTvShow,sessionShow,favouriteTvShow,tvSearch,tvSave } from "./TvSliceService"




const tvSlice = createSlice({
  name: "tvShow",
  initialState,
  reducers: {
    addTvShow: (state, { payload }) => {
      state.tvShow = payload;
   
    },
  },
  extraReducers: {
    [popularTvShow.pending]: () => {
     // console.log("pending in Tv");
    },
    [popularTvShow.fulfilled]: (state, { payload }) => {
      return { ...state,tvShow: payload, searchItem:"", save:false };
    },
    [popularTvShow.rejected]: () => {
      console.log("rejected in Tv");
    },

    [favouriteTvShow.fulfilled]: (state, { payload }) => {
      return { ...state, favoritesTvShow: payload, save:false };
    },
    [tvSearch.fulfilled]: (state, { payload }) => {
      return { ...state, searchItem: payload };
    },
    [searchTvShow.fulfilled]: (state, { payload }) => {
   
      return {...state,
        TvShow: payload,
        searchedTvShow: payload,
        save:true,
       viewedTvShow: [payload,...state.viewedTvShow]
        
      };
    },

    [detailsTvShow.fulfilled]: (state, { payload }) => {
      localStorage.setItem(payload.id, JSON.stringify(payload))
      return { ...state, detailTvShow: payload };
    },

    [searchSeason.fulfilled]: (state, { payload }) => {
      localStorage.setItem(payload.id, JSON.stringify(payload))
      return { ...state, seasonTvShow: payload };
    },


    [sessionShow.fulfilled]: (state, { payload }) => {
      return { ...state, sessionShow: payload };
    },

    [tvSave.fulfilled]: (state) => {
      return { ...state,  save:true };
    },

    
  },
});

export const { addTvShow } = tvSlice.actions;
export const getUser = (state) => state.tvShow.user;
export const getTvShow = (state) => state.tvShow.tvShow;
export const getsearch = (state) => state.tvShow.searchItem;
export const getSearchedTvShow = (state) => state.tvShow.searchedTvShow;
export const getDetailTvShow = (state) => state.tvShow.detailTvShow;
export const getViewedTvShow = (state) => state.tvShow.viewedTvShow;
export const getFavoriteTvShow = (state) => state.tvShow.favoritesTvShow;
export default tvSlice.reducer;
