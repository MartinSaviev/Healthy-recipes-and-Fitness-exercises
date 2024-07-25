export default async function requester(method, url, data) {
  const baseUrl = "http://localhost:3030/jsonstore/recipes/recipes";

  const options = {};

  if (method === "GET") {
    options.method = method;

  }if (method === "POST") {

    options.method = method;
    options.headers = {
      "Content-Type": "application/json",
    },
      options.body = JSON.stringify(data);

  }if (method === "PUT") {
    options.method = method;
    options.headers = {
      "Content-Type": "application/json",
    },
      options.body = JSON.stringify(data);
  }if (method === "DELETE") {
    options.method = method;

  }

  const response = await fetch(`${baseUrl}/${url}`, options);
  const result = await response.json();
  return result;
}
