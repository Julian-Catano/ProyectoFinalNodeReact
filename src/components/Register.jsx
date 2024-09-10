import React, { useState } from 'react';

const Register = () => {
  const [document, setDocument] = useState('');
  const [names, setNames] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [celphone, setCelphone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/users/create-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          document,
          names,
          lastname,
          email,
          celphone,
          password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Usuario creado correctamente');
        setErrorMessage('');
      } else {
        setSuccessMessage('');
        setErrorMessage(data.msg || 'Error al crear el usuario');
      }
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error en la conexión con el servidor');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="document">Document:</label>
        <input
          type="text"
          id="document"
          value={document}
          onChange={(e) => setDocument(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="names">Names:</label>
        <input
          type="text"
          id="names"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      </div>
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
        <label htmlFor="celphone">Cellphone:</label>
        <input
          type="text"
          id="celphone"
          value={celphone}
          onChange={(e) => setCelphone(e.target.value)}
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
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Cargando...' : 'Register'}
      </button>
    </form>
  );
};

export default Register;