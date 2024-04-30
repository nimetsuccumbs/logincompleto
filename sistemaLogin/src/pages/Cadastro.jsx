import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Cadastro() {
  const [novoUsuario, setNovoUsuario] = useState({
    username: '',
    password: '',
  });

  const irParaHome = useNavigate();
  const handleClick = () => {
    irParaHome('/');
  };

   
  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setNovoUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/api/cadastro', novoUsuario);

      setNovoUsuario({
        username: '',
        password: '',
      })
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error('Erro ao criar Usuario:', error);
    }
  }

  return (
    <div>
      <h1>Cadastro de Usuarios</h1>
   <div className='info'>
      <form onSubmit={handleSubmit}> 
        <input
          type="text"
          name="username"
          placeholder="username"
          value={novoUsuario.username}
          onChange={handleInputChange}
        />     
        <input
          type="password" 
          name="password"
          placeholder="password"
          value={novoUsuario.password}
          onChange={handleInputChange}
        /> <br/><br/>
        <button type="submit">Criar conta</button>  
      </form>  <br/>
  
      <button onClick={handleClick}>
  
        Voltar
      </button>
      </div>
    </div>
  );
};

export default Cadastro;