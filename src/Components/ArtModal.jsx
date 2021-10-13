const ArtModal = ({ asset, setShowModal }) => {
  console.log(asset);

  const onClose = () => {
    document.body.style.overflow = "scroll";
    setShowModal((prevState) => !prevState);
  };

  /*
<div className="modal-p">
          <div className="modal-h2">{asset.name}</div>
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
          {asset.description}
          {!!asset.traits.length && (
            <div>
              {asset.traits.map((value, index) => {
                return (
                  <div key={index}>
                    Traits: {value.trait_type}, value: {value.value}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtModal;
