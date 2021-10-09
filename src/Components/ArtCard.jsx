import React from "react";

const ArtCard = ({ asset }) => {
  const artConditionImage = asset.image_url === "" || asset.image_url === null;
  const artConditionUserName = asset?.creator?.user?.username === null;

  if (artConditionImage || artConditionUserName) {
    return null;
  } else {
    return (
      <div className="wrapper--variable">
        <table className="artcard">
          <tbody>
            <tr>
              <th colSpan="2">
                <img src={asset.image_url} alt=""></img>
              </th>
            </tr>
            <tr>
              <td>{asset?.creator?.user?.username}</td>
              <td>Price</td>
            </tr>
            <tr>
              <td>
                <bold>{asset.name}</bold>
              </td>
              <td>
                <bold>Price in dollar</bold>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default ArtCard;
