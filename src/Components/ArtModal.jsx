const ArtModal = ({ asset, setShowModal }) => {
  console.log(asset);

  const onClose = () => {
    document.body.style.overflow = "scroll";
    setShowModal((prevState) => !prevState);
  };

  const traits = () => {
    if (asset.traits.length > 0) {
      return (
        <div>
          {asset.traits.map((value, index) => {
            return (
              <div className="modal-p" key={index}>
                Trait: {value.trait_type}, value: {value.value}
              </div>
            );
          })}
        </div>
      );
    } else {
      return "";
    }
  };

  /*trait_type
  value
  */

  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-place-button">
          <div className="modal-button" onClick={onClose}></div>
        </div>
        {asset.name}
        <a href={asset.permalink}>
          <img src={asset.image_url} alt="" className="img-modal"></img>
        </a>
        {asset.description}
        {traits()}
      </div>
    </div>
  );
};

export default ArtModal;
