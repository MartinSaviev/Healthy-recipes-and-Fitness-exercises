import HealthyAndFitness from "../components/backgroudImg/HealthyAndFitness";
import Header from "../components/header/Header";
import Login from "../components/login/Login";
import ChangeRecipe from "../components/recipes/change-recipe/ChangeRecipe";
import Comments from "../components/recipes/comments/Comments";
import CreateRecipe from "../components/recipes/create-recipe/CreateRecipe";
import Recipes from "../components/recipes/load-recipes/Recipes";
import Register from "../components/register/Register";
import CreateNewVideo from "../components/video/create-new-video/CreateNewVideo";
import Video from "../components/video/Video";
import "./App.css";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
     
      <Routes>
        <Route path="/" element={ <HealthyAndFitness/>}></Route> 
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/recipes" element={<Recipes/>}></Route>
        <Route path="/video"  element={<Video/>}></Route>
        <Route path="/CreateRecipe" element={<CreateRecipe />}></Route>
        <Route path ="/CreateNewVideo" element={<CreateNewVideo />}></Route>
        <Route path="/ChangeRecipe/:userId" element={<ChangeRecipe />}></Route>
        <Route path="/Comments/:userId" element={<Comments />}></Route>
      </Routes>
    </>
  );
}

export default App;
