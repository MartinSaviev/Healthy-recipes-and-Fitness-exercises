import { useEffect, useState } from "react";
import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";

export function useRequest(id, url,secondId) {
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    (async () => {
      let endpoint = urls.recipes;
      if (id) {
        endpoint += `/${id}`;
      }
      if (url) {
        endpoint += `/${url}`;
      }
      if (secondId) {
        endpoint += `/${secondId}`;
      }

      const data = await requester.get(endpoint);
      setRecipes(data);
      console.log(data);
      
    })();

  }, [id, url, secondId]);

  return recipes;
}



