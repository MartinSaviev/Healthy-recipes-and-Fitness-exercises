import { useEffect, useState } from "react";
import style from "./Recipes.module.css";

import requester from "../../../src/api/requester.js";

// eslint-disable-next-line react/prop-types
export default function Method({ id }) {
  const [cooking, setCooing] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await requester("GET", `${id}/steps`);

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
