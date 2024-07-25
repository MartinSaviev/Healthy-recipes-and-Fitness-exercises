
const baseUrl = "http://localhost:3030/jsonstore/recipes/recipes";

export async function recipeRequest(method,id,data){

    const options = {}

    if(method === "POST") {
        options.method = method,
        options.headers = { "Content-Type": "application/json" },
        options.body = JSON.stringify({
            ...data,
            ingredients: data.ingredients.split(","),
            steps: data.steps,
        })
    }

    if(method === "PUT") {
        options.method = method,
        options.headers = { "Content-Type": "application/json" },
        options.body = JSON.stringify({
            ...data,
            ingredients: data.ingredients.split(","),
            steps: data.steps,
            "_id":id,
        })
    }

    const response = await fetch(`${baseUrl}/${id}`, options);
    const result = await response.json();
    return result;

}