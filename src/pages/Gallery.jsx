import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../productData";

const Gallery = () => {
  const { addToCart } = useCart();

  return (
    <div className="container mt-5">
      <h2>Galería de Productos</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Precio: ${product.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => addToCart(product)}
                >
                  Añadir al Carrito
                </button>
                <Link to={`/product/${product.id}`} className="btn btn-secondary btn-sm">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;