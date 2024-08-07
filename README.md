# Healthy-recipes-and-Fitness-exercises
Softuni React Course Project June-2024

# React-Project-Defence - Healthy-recipes-and-Fitness-exercises

Project defence for Softuni by Martin Saviev
Softuni React Project - Project Defense Single Page Application - Healthy-recipes-and-Fitness-exercises, using React for the Frontend (FE) and softuni-practice-server for the Backend (BE).

FUNCTIONALITY:
--------------------------
The project is an Healthy-recipes-and-Fitness-exercises, where people can added and view videos ,can added and view recipes and buy products from accessories shop.

Users can view videos and recipes on the videos/allRecipes page. 
They can also go to the details page of the recipes and see all the information about said item.
They can also view the comments.

Logged-in users can place comments on all videos and recipes, as well as delete their own comments and recipes.
They can buy the desired articles, which are placed in page Accessories.
Guests are not able to comment, add recipe or buy.

Logged-in users can add new recipes and videos in the video/allRecipes page. There is a validation, which
checks if the fields are empty and shows an error message.

Logged-in users, can Delete or Edit their own comments and recipes.

Logged-in users can view their Cart page, which shows all the products in their basket.
Logged in users can see an accessories page that shows all the products they can buy.
Guests do not have a cart and accessories page and can't access it.

Login and Register pages use validation. If any field is empty, an error message.

Logged in users can access the "MyRecipes" page, which stores all the recipes they have created.
Each recipes has an "Edit","Delete" and "Comments" buttons.

If there is no path matching the url, a 404 Error page is shown.

Technologies used:
-----------------------
HTML, CSS

Javascript

React


HOW TO START:
--------------------------
Go to client terminal and type `npm create vite .` for the client application.

`npm install`

`npm run dev`

Go to server terminal and run "node server.js" for the backend server.