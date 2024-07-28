import { Routes, Route } from "react-router-dom";
import { ContextProvider } from "../src/context/AuthContext";

import HealthyAndFitness from "../components/backgroudImg/HealthyAndFitness";
import Header from "../components/header/Header";
import Login from "../components/login/Login";
import Page404 from "../components/page-404/Page404";
import ChangeRecipe from "../components/recipes/edit-recipe/ChangeRecipe";
import AddComment from "../components/recipes/comments/add-comment/AddComment";
import Comments from "../components/recipes/comments/Comments";
import CreateRecipe from "../components/recipes/create-recipe/CreateRecipe";
import DeleteRecipe from "../components/recipes/delete-recipe/DeleteRecipe";
import Recipes from "../components/recipes/load-recipes/Recipes";
import Register from "../components/register/Register";
import CreateNewVideo from "../components/video/create-new-video/CreateNewVideo";
import Video from "../components/video/Video";
import Logout from "../components/logout/Logout";
import "./App.css";
import Accessories from "../components/accessories/Accessories";
import ShoppingCart from "../components/accessories/shopping-cart/ShoppingCart";

function App() {
  return (
    <>
      <ContextProvider>
          <Header />
        <Routes>
          <Route path="/" element={<HealthyAndFitness />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/video" element={<Video />}></Route>
          <Route path="/CreateRecipe" element={<CreateRecipe />}></Route>
          <Route path="/CreateNewVideo" element={<CreateNewVideo />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>
          <Route path="/ChangeRecipe/:userId"element={<ChangeRecipe />}></Route>
          <Route path="/DeleteRecipe/:userId"element={<DeleteRecipe />}></Route>
          <Route path="/AddComment/:userId" element={<AddComment />}></Route>
          <Route path="/Comments/:userId" element={<Comments />}></Route>
          <Route path="/Accessories" element={<Accessories />}></Route>
          <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
