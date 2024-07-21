import { useEffect, useState } from "react";
import style from "./Recipes.module.css";
const url = "http://localhost:3030/jsonstore/recipes";

// eslint-disable-next-line react/prop-types
export default function Method({id}) {


  const [cooking, setCooing] = useState([]);
 
  useEffect(() => {
    (async () => {
      const response = await fetch(`${url}/recipes/${id}`);
      const data = await response.json();
      setCooing(data);
    })();
  }, [id]);
  
  console.log(cooking);
  
  return (
    <article className={style.method}>
      <h4>Начин на приготване</h4>

        <p key={cooking._id}>{cooking.steps}</p>
    </article>
  );
}
