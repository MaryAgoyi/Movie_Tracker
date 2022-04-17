
const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
    user: user,
    save: "",
    searchItem: "",
    tvShow: [],
    searchedTvShow: [],
    viewedTvShow:  JSON.parse(localStorage.getItem("view"))?  JSON.parse(localStorage.getItem("view")): [],
    detailTvShow: [],
    seasonTvShow:[],
    //sessionShow: [],
    favoritesTvShow: [],
    savedTv: JSON.parse(localStorage.getItem("tv"))?  JSON.parse(localStorage.getItem("tv")): "",
  
  };