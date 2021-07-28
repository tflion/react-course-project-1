import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const addUserHandler = (nomeUsuario, idadeUsuario) => {
    setListaUsuarios((listaUsuariosAnterior) => {
      return [
        ...listaUsuariosAnterior,
        {
          nome: nomeUsuario,
          idade: idadeUsuario,
          id: Math.random().toString()
        }];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={listaUsuarios} />
    </div>
  );
}

export default App;
