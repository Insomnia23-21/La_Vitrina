import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const calculateTotal = () =>
    cart.reduce((total, product) => total + (product.price || 0), 0);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      setMessage("No tienes productos en tu carrito.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Simulación de envío de pedido
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula un retraso de 1s
      clearCart(); // Limpia el carrito después de la compra
      setMessage("¡Pedido realizado con éxito! Gracias por tu compra.");
    } catch (error) {
      setMessage("Hubo un error al procesar tu pedido. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {message && <div className="alert alert-info">{message}</div>}
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((product, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                  <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
                </div>
                <div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h4>Total: ${calculateTotal().toFixed(2)}</h4>
            <button
              className="btn btn-primary"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? "Procesando..." : "Realizar Pedido"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;