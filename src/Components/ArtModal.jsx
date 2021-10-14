const ArtModal = ({ asset, setShowModal }) => {
  console.log(asset);

  const onClose = () => {
    document.body.style.overflow = "scroll";
    setShowModal((prevState) => !prevState);
  };

  const count = (num) => {
    return parseInt(num);
  };

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
          {!!asset?.creator?.user?.username && (
            <div>
              <strong>Creator: </strong> {asset?.creator?.user?.username}
              <br></br>
            </div>
          )}
          {!!asset.description && (
            <div>
              <br></br>
              <strong>Description: </strong> {asset.description}
              <br></br>
            </div>
          )}
          {!!asset?.last_sale?.payment_token && (
            <div>
              <br></br>
              <strong>Price: </strong>
              {count(asset.last_sale.payment_token.usd_price)} $<br></br>
              <br></br>
            </div>
          )}

          {!!asset.traits.length && (
            <div className="modal-trait-container">
              {asset.traits.map((value, index) => {
                return (
                  <div className="modal-trait" key={index}>
                    <strong>{value.trait_type}</strong>
                    <br></br>
                    {value.value}
                  </div>
                );
              })}
            </div>
          )}

          {!!asset?.collection?.name && (
            <div>
              <br></br>
              <strong>About {asset?.collection?.name} </strong>
              <br></br>
            </div>
          )}

          {!!asset?.collection?.description && (
            <div>
              <br></br>
              {asset?.collection?.description}
              <br></br>
            </div>
          )}

          {!!asset?.collection?.slug && (
            <div>
              <br></br>
              <strong>Collection search name: </strong>{" "}
              {asset?.collection?.slug}
              <br></br>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/*

{!!asset?.collection?.name && (
  <div>
  <strong>Collection name: </strong> {asset?.collection?.name}
<br></br>
              <br></br>
            </div>

)}

*/
export default ArtModal;
