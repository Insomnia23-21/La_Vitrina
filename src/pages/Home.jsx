import React from "react";

const Home = () => {
  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        weight: "100vh",
        margin: 0,
      }}
    >
      <div className="hero-content text-center">
        <h1 className="display-4">¡Bienvenido a La Vitrina!</h1>
        <p className="lead">Encuentra lo que necesitas al mejor precio.</p>
        <Link to="/gallery" className="btn btn-primary btn-lg">
          Explorar productos
        </Link>
      </div>
    </div>
  );
};

export default Home;

