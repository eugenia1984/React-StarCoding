const CardComponent = ({title, src, text }) => {
  function handleClick() {
    alert("Item added")
  }

  return (
    <div className="card col-4">
      <img
        src={src}
        className="card-img-top"
        alt="some random product"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          { text }
        </p>
        <button 
          className="btn btn-primary"
          onClick={handleClick}>
          Add to Shopping Cart
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
