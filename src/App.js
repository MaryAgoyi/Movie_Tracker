import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from './components/Spinner';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite';
import Viewed from './components/Viewed/Viewed';
import TvShowDetails from './components/TvShowDetails/TvShowDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Layout from './components/Layout/Layout';
import SessionShowDetails from './components/SessionShowDetails/SessionShowDetails';
import Search from './components/Search/Search';
import TvShowDetailsSaved from './components/TvShowDetailsSaved/TvShowDetailsSaved';




function App() {
  return (
    <>
    <Suspense fallback={<Spinner />}>
    <Routes>
   <Route path="/" element={<Layout/>}>
   <Route  path="/login" element={<Login/>}></Route>
    
   <Route element={<RequireAuth/>}>
  
      <Route  path="/" element={<Home/>}></Route>
   <Route  path="/TvShow/:tv_Id" element={<TvShowDetails/>}></Route>
  <Route  path="/TvSession/:tv_Id" element={<SessionShowDetails/>}></Route>
   <Route  path="/Favorites" element={<Favorite/>}></Route>
   <Route  path="/TvShowDetailsSaved/:tv_Id" element={<TvShowDetailsSaved/>}></Route>
  
   <Route  path="/Viewed" element={<Viewed/>}></Route>
   <Route  path="/Search" element={<Search/>}></Route>
   <Route  path="*" element={<PageNotFound/>}></Route>
    </Route> 
    </Route>
    </Routes>   
    </Suspense>
 
  </>
  );
}

export default App;
