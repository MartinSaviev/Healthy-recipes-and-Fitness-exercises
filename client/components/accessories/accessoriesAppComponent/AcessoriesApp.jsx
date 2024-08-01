import { useContext, useEffect, useState } from "react";
import Accessories from "../Accessories";
import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";
import { AccContext } from "../../../src/context/AccessoriesContext";

export default function AccessoriesApp() {
  const [accessories, setAccessories] = useState([]);
  const { changeAccessoriesState } = useContext(AccContext);

  useEffect(() => {
    (async () => {
      const result = await requester.get(urls.accessories);
      setAccessories(Object.values(result));
    })();
  }, []);

  async function getImgHandler(ev) {
    let accessoriesId = ev.currentTarget.id;
    const itemId = await requester.get(`${urls.accessories}/${accessoriesId}`);
    changeAccessoriesState(itemId);
  }

  return (
    <>
      <Accessories accessories={accessories} getImgHandler={getImgHandler} />
    </>
  );
}
