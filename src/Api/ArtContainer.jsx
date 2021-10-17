import { useEffect, useState } from "react";
import ArtCard from "../Components/ArtCard";
import errorImage from "../Components/errorImage.png";

const ArtContainer = ({
  sortData,
  orderBy,
  limit,
  collection,
  setOrderBy,
  setCollection,
}) => {
  const [art, setArt] = useState([]);

  const goBack = () => {
    setCollection("");
    setOrderBy("order_by=sale_price&");
  };

  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const data = () => {
      setIsFetching(true);
      fetch(
        `https://api.opensea.io/api/v1/assets?${orderBy}order_direction=${sortData}&offset=0&limit=${limit}${collection}`
      )
        .then((response) => response.json())
        .then((data) => {
          setArt([...data.assets]);
          setIsFetching(false);
        });
    };
    data();
  }, [sortData, orderBy, limit, collection]);
  console.log(art);

  if (isFetching) {
    return <div className="loader" />;
  } else {
    if (art.length > 0 && art !== null) {
      const assetArray = art.map((asset) => {
        return <ArtCard key={asset.id} asset={asset} />;
      });

      return assetArray;
    } else {
      return (
        <div className="error">
          <img src={errorImage} onClick={goBack} alt="jpg"></img>
          <p onClick={goBack}>
            Search for example "flowers" or click on me to go back
          </p>
        </div>
      );
    }
  }
};

export default ArtContainer;
