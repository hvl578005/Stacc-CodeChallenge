const ArtModal = ({ asset, setShowModal }) => {
  console.log(asset);

  const onClose = () => {
    document.body.style.overflow = "scroll";
    setShowModal((prevState) => !prevState);
  };

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
        {!!asset.traits.length && (
          <div>
            {asset.traits.map((value, index) => {
              return (
                <div className="modal-p" key={index}>
                  Traits: {value.trait_type}, value: {value.value}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtModal;
