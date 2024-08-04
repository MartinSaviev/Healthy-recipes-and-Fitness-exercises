import { useEffect, useState } from "react";
import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";

export function useRequest(id, url) {
  const [recipes, getRecipes] = useState({});

  useEffect(() => {
    (async () => {
      
      let  data = await requester.get(urls.recipes);
    
      if (id) {
        data = await requester.get(`${urls.recipes}/${id}`);
        
      } if (id && url) {
        data = await requester.get(`${urls.recipes}/${id}/${url}`);
      }

      getRecipes(data);

    })();
  }, [id, url]);

  return recipes;
}
