const ArtModal = (asset) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h2>{asset.name} HELLOOO</h2>
      </div>
      <div className="modal-body">
        <img src={asset.image_url} alt=""></img>
      </div>
    </div>
  );
};

export default ArtModal;
