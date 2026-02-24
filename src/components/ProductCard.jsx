export default function ProductCard({ image, name, price, rating }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4 style={{ color: "black" }}>{name}</h4>
      <p className="rating">⭐⭐⭐ {rating}</p>
      <div className="card-footer">
        <span className="price" style={{ color: "black",marginRight: "43px" }}>{price}</span>
        <button >＋</button>
      </div>
    </div>
  );
}
