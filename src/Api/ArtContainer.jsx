import { useEffect, useState } from "react";
import ArtCard from "../Components/ArtCard";

const ArtContainer = () => {
  const [pusi, setPusi] = useState([]);

  useEffect(() => {
    const data = () => {
      fetch(
        "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50"
      )
        .then((response) => response.json())
        .then((data) => {
          setPusi([...data.assets]);
        });
    };
    data();
  }, []);

  

  const assetArray = pusi.map((asset) => {
    return (
      <ArtCard
        key={asset.id}
        asset={asset}
      />
      
    );
  });

  return assetArray;
};

export default ArtContainer;
