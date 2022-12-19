const CardComponent = ({title, src, text, price }) => {
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
        <a href="/" className="btn btn-primary">
          $ {price}
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
