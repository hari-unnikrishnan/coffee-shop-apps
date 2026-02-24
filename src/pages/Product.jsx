export default function ProductCard({ image, name, rating, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p className="product-rating">⭐ {rating}</p>

      <div className="product-footer">
        <span className="product-price">{price}</span>
        <button className="add-btn">+</button>
      </div>
    </div>
  );
}
