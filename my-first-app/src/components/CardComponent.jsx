const CardComponent = ({title, src, text, addToShoppingCart }) => {

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
          onClick={(event) => {addToShoppingCart(event, "product")}}>
          Add to Shopping Cart
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
