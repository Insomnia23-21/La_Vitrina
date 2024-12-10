import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../productData";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container mt-5">Producto no encontrado.</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{product.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p>{product.longDescription}</p>
          <h4>Precio: ${product.price.toFixed(2)}</h4>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;