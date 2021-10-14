import { useEffect, useState } from "react";
import ArtCard from "../Components/ArtCard";
import ArtCardCollection from "../Components/ArtCardCollection";

const ArtContainer = ({ sortData, orderBy, limit, collection }) => {
  const [art, setArt] = useState([]);

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
        });
    };
    data();
    setIsFetching(false);
  }, [sortData, orderBy, limit, collection]);
  console.log(art);

  if (isFetching) {
    return <div className="loader">hello</div>;
  } else {
    const assetArray = art.map((asset) => {
      return <ArtCard key={asset.id} asset={asset} />;
    });
    return assetArray;
  }
};

export default ArtContainer;

/*

Her prøvde jeg å hente ut Collections med koden nedenfor som er kommentert ut. Jeg endte opp med å ikke gjøre det allikevel,
da JSON dataen jeg fikk fra collections endte opp med å være noe jeg egentlig ikke kunne bruke til noe. Jeg fikk hentet ut navn,
description og bilde men ellers var det ikke noe å hendte. Alle collectionsene jeg fikk hentet inn søkte jeg opp på Opensea.io, 
og absolutt alle var tomme.. Så kanksje API-et hentet alle de nyeste collectionsene som ble opprettet. Så jeg endte opp med å gå
tilbake til å kun ha NFT's og ikke

const ArtContainer = ({ sortData, orderBy, limit, collection }) => {
  const [art, setArt] = useState([]);

  useEffect(() => {
    const data = () => {
      if (collection === false) {
        fetch(
          `https://api.opensea.io/api/v1/assets?${orderBy}order_direction=${sortData}&offset=0&limit=${limit}`
        )
          .then((response) => response.json())
          .then((data) => {
            setArt([...data.assets]);
          });
      } else {
        fetch(`https://api.opensea.io/api/v1/collections?offset=0&limit=300`)
          .then((response) => response.json())
          .then((data) => {
            setArt([...data.collections]);
          });
      }
    };
    data();
  }, [sortData, orderBy, limit, collection]);
  console.log(art);

  if (collection === false) {
    const assetArray = art.map((asset) => {
      return <ArtCard key={asset.id} asset={asset} />;
    });
    return assetArray;
  } else {
    const assetArray = art.map((asset) => {
      return <ArtCardCollection key={asset.id} asset={asset} />;
    });
    return assetArray;
  }
};


*/
