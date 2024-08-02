import { Routes, Route } from "react-router-dom";
import { ContextProvider } from "../src/context/AuthContext";
import { AccContextProvider } from "./context/AccessoriesContext";

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
import ShoppingCart from "../components/accessories/shopping-cart/ShoppingCart";
import AccessoriesApp from "../components/accessories/accessoriesAppComponent/AcessoriesApp";
import Accessories from "../components/accessories/Accessories";
import Checkout from "../components/accessories/shopping-cart/checkout/Checkout";
import EditVideo from "../components/video/edit-video/EditVideo";
import DeleteVideo from "../components/video/delete-vide/DeleteVideo";
import AllRecipes from "../components/recipes/allRecipes/AllRecipes";
import ShowMyRecipes from "../components/recipes/show-my-recipes/ShowMyRecipes";

function App() {
  return (
    <>
      <AccContextProvider>
      <ContextProvider>
          <Header />
        <Routes>
          <Route path="/" element={<HealthyAndFitness />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/AllRecipes/recipes/:userId" element={<Recipes />}></Route>
          <Route path="/AllRecipes" element={<AllRecipes />}></Route>
          <Route path="/ShowMyRecipes" element={<ShowMyRecipes />}></Route>
          <Route path="/video" element={<Video />}></Route>
          <Route path="/CreateNewVideo" element={<CreateNewVideo />}></Route>
          <Route path="/EditVideo/:userId" element={<EditVideo />}></Route>
          <Route path="/DeleteVideo/:userId" element={<DeleteVideo />}></Route>
          <Route path="/CreateRecipe" element={<CreateRecipe />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>
          <Route path="/ChangeRecipe/:userId"element={<ChangeRecipe />}></Route>
          <Route path="/DeleteRecipe/:userId"element={<DeleteRecipe />}></Route>
          <Route path="/AddComment/:userId" element={<AddComment />}></Route>
          <Route path="/Comments/:userId" element={<Comments />}></Route>
          <Route path="/AccessoriesApp" element={<AccessoriesApp />}></Route>
          <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
          <Route path="Accessories"  element={<Accessories />}></Route>
          <Route path="/Checkout"    element={<Checkout />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>
      </ContextProvider>
      </AccContextProvider>
    </>
  );
}

export default App;
