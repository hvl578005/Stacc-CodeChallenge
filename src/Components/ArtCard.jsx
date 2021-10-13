import React, { useState } from "react";
import ArtModal from "./ArtModal.jsx";

const ArtCard = ({ asset }) => {
  const [showModal, setShowModal] = useState(false);
  const artConditionImage = asset.image_url === "" || asset.image_url === null;
  const artConditionUserName = asset?.creator?.user?.username === null;

  const handleClick = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
    setShowModal((prevState) => !prevState);
  };

  const count = (num) => {
    return parseInt(num);
  };

  const dynamicBackgroundColor = (backcolor) => {
    if (backcolor == null) {
      return { backgroundColor: "white" };
    } else {
      return { backgroundColor: { backcolor } };
    }
  };

  if (artConditionImage || artConditionUserName) {
    return null;
  } else {
    return (
      <>
        <div
          className="wrapper--variable"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <table
            className="artcard"
            style={dynamicBackgroundColor(asset?.background_color)}
          >
            <tbody>
              <tr>
                <th colSpan="2">
                  <img src={asset.image_url} alt=""></img>
                </th>
              </tr>
              <tr>
                <td>{asset?.creator?.user?.username}</td>
                <td>
                  {!!asset?.last_sale?.payment_token && <div>Price</div>}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{asset.name}</strong>
                </td>
                <td>
                  <strong>
                    {!!asset?.last_sale?.payment_token && (
                      <div>
                        {count(asset.last_sale.payment_token.usd_price)} $
                      </div>
                    )}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {showModal && <ArtModal asset={asset} setShowModal={setShowModal} />}
      </>
    );
  }
};

export default ArtCard;
