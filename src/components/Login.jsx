import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Hacer la petición a tu API para autenticar
      const response = await fetch('http://localhost:5000/api/auth/auth-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Manejar la respuesta exitosa (quizás guardar el token en localStorage)
        console.log('Usuario autenticado:', data);
        // Aquí puedes redirigir o guardar el token en localStorage
        localStorage.setItem('token', data.token); // Si usas JWT
      } else {
        // Manejar errores como usuario no encontrado o contraseña incorrecta
        setErrorMessage(data.msg || 'Error al iniciar sesión');
      }
    } catch (error) {
      // Manejar errores de red o conexión
      setErrorMessage('Error en la conexión con el servidor');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Cargando...' : 'Login'}
      </button>
    </form>
  );
};

export default Login;



