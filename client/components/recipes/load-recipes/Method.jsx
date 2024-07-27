import { useEffect, useState } from "react";

import * as requester from "../../../src/api/requester.js";

import style from "./Recipes.module.css";

const ulr = 'recipes/recipes'

// eslint-disable-next-line react/prop-types
export default function Method({ id }) {
  const [cooking, setCooing] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await requester.get(`${ulr}/${id}/steps`);
      setCooing(data);
    })();
  }, [id]);

  return (
    <article className={style.method}>
      <h4>Начин на приготване</h4>

      <p>{cooking}</p>
    </article>
  );
}
