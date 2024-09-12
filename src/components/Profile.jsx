import React, { useEffect, useState } from 'react';
import '../estilos/tailwind.css';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUserData = async (id) => {
    
      console.log(id)
      const response = await fetch(`http://localhost:5000/api/users/consult-user-id/${id}`);
    //   if (!response.ok) {
    //     throw new Error('Error al cargar los datos del usuario');
    //   }

      const data = await response.json();
      console.log(data.results);


      

      setUserData(data.results); // Asegúrate de que `data.user` es la estructura correcta
    
  };

  useEffect(() => {

    fetchUserData(12);

  }, []);

//   if (loading) {
//     return <p>Cargando perfil...</p>;
//   }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  //console.log(userData)

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
      {userData ? (
        <pre className="whitespace-pre-wrap">{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        <p>No se encontró información del usuario</p>
      )}
    </div>
  );
};

export default Profile;