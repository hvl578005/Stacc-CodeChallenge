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
        <br></br>
        {asset.name}
        <br></br>
        <img src={asset.image_url} alt="" class="img-modal"></img>
        <br></br>
        {asset.description}
      </div>
    </div>
  );
};

export default ArtModal;;
