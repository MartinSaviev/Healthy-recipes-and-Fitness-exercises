import HealthyAndFitness from "../components/backgroudImg/HealthyAndFitness";
import Header from "../components/header/Header";
import Login from "../components/login/Login";
import CreateRecipe from "../components/recipes/createRecipe/CreateRecipe";
import Recipes from "../components/recipes/loadRecipes/Recipes";
import Register from "../components/register/Register";
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
      </Routes>
    </>
  );
}

export default App;
