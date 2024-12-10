import React from 'react';

const Profile = () => {
  // reemplazar datos por reales en Backend
  const userData = {
    username: 'Usuario uno',
    email: 'usuariouno@correo.com',
  };

  return (
    <div className="container mt-5">
      <h2>Mi Perfil</h2>
      <p><strong>Nombre de usuario:</strong> {userData.username}</p>
      <p><strong>Correo Electrónico:</strong> {userData.email}</p>
    </div>
  );
};

export default Profile;