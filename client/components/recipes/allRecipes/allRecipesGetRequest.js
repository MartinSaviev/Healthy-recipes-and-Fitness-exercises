import { useEffect, useState } from "react";
import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";

export function useRequest(){
    const [recipes, getRecipes] = useState([]);
    useEffect(() => {
      (async () => {
        const data = await requester.get(urls.recipes);
        getRecipes(Object.values(data));
      })();
    }, []);
    return recipes;
}