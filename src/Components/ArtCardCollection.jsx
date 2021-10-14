import React, { useState } from "react";

const ArtCardCollection = ({ asset }) => {
  const artCollectionImage =
    asset?.image_url === "" || asset?.image_url === null;
  const artCollectionName = asset?.name === null;

  if (artCollectionImage || artCollectionName) {
    return null;
  } else {
    return (
      <>
        <div className="wrapper--variable">
          <table className="artcard">
            <tbody>
              <tr>
                <th>
                  <strong>{asset?.name}</strong>
                </th>
              </tr>
              <tr>
                <td>
                  <img src={asset?.image_url} alt=""></img>
                </td>
              </tr>
              <tr>
                <td>{asset?.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
};

export default ArtCardCollection;
