import { useEffect, useState } from "react";
import ArtCardCollection from "../Components/ArtCardCollection";

const Collections = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const data = () => {
      fetch(`https://api.opensea.io/api/v1/collections?offset=0&limit=300`)
        .then((response) => response.json())
        .then((data) => {
          setCollection([...data.assets]);
        });
    };
    data();
  }, []);
  console.log(collection);

  const collectionArray = collection.map((asset) => {
    return <ArtCardCollection key={asset.id} asset={asset} />;
  });

  return collectionArray;
};

export default Collections;
