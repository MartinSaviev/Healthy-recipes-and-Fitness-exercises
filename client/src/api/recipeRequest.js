
import { urls } from "../../public/allUrls/urls";

export async function recipeRequest(method, id, data) {
  const options = {
    method: method,
    headers: { "Content-Type": "application/json" },
  };

  if (method === "POST") {
    options.body = JSON.stringify({
      ...data,
      ingredients: data.ingredients.split(","),
      steps: data.steps,
    });
  }

  else if (method === "PUT") {
    options.body = JSON.stringify({
      ...data,
      ingredients: data.ingredients.split(","),
      steps: data.steps,
      _id: id,
    });
  }

  const response = await fetch(`${urls.recipes}/${id}`, options);
  const result = await response.json();
  return result;
}

export const post = recipeRequest.bind(null, "POST");
export const put = recipeRequest.bind(null, "PUT");
