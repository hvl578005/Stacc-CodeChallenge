const ArtModal = ({ asset, setShowModal }) => {
  console.log(asset);

  const onClose = () => {
    document.body.style.overflow = "scroll";
    setShowModal((prevState) => !prevState);
  };

  const count = (num) => {
    return parseInt(num);
  };

  /*
<div className="modal-p">
          <div className="modal-h2">{asset.name}</div>
  */

  /*
<strong>Creator: </strong>
          {!!asset.creator.user.username}
          
          <br></br>
          <br></br>
          her lage sjekk om det finnes brukernavn
          */

  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-place-button">
          <div className="modal-button" onClick={onClose}></div>
        </div>
        <div className="modal-p">
          <div className="modal-h2">{asset.name}</div>
          <a href={asset.permalink}>
            <img src={asset.image_url} alt="" className="img-modal"></img>
          </a>
          {!!asset.creator.user.username && (
            <div>
              <strong>Creator: </strong> {asset.creator.user.username}
              <br></br>
              <br></br>
            </div>
          )}
          {!!asset.description && (
            <div>
              <strong>Description: </strong> {asset.description}
              <br></br>
              <br></br>
            </div>
          )}
          {!!!!asset.last_sale.payment_token && (
            <div>
              <strong>Price: </strong>
              {count(asset.last_sale.payment_token.usd_price)} $
            </div>
          )}
          {!!asset.traits.length && (
            <div>
              <table className="modal-table">
                <tbody>
                  <tr>
                    <th>Trait</th>
                    <th>Value</th>
                  </tr>
                  {asset.traits.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.trait_type}</td>
                        <td>{value.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ArtModal;
