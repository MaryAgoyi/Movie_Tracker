import { useState } from "react";
import Box from "@mui/material/Box";
import { InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch} from 'react-redux'
import {  searchTvShow, tvSearch} from "../../features/tvShow/TvSliceService";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const [search, setSearch] =useState("");
  const dispatch = useDispatch()
 const navigate =useNavigate()
     const handleSearch = (e) =>{
   e.preventDefault()
    dispatch(tvSearch(search))
    dispatch(searchTvShow(search))
   navigate("/Search")
   setSearch("")
}

  return (
    <>
      <Box
        component="form"
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 250,
          
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search TvShow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          inputProps={{ "aria-label": "search TvShow" }}
        />
        <IconButton onClick={handleSearch} type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchOutlinedIcon  />
        </IconButton>
      </Box>
    </>
  );
};

export default SearchBar;