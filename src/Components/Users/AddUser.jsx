import React, { useState } from 'react'

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [idade, setIdade] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
        if(nomeUsuario.trim().length === 0 || idade.trim().length ===0){
            return;
        }
        
        if(+idade < 1){
            return;
        }

        props.onAddUser(nomeUsuario, idade);
        setNomeUsuario('');
        setIdade('');
    }

    const nomeUsuarioChangeHandler = (event) => {
        setNomeUsuario(event.target.value);
    }
    
    const idadeChangeHandler = (event) => {
        setIdade(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">Nome:</label>
                <input type="text" id="username" value={nomeUsuario} onChange={nomeUsuarioChangeHandler} />
                <label htmlFor="age">Idade:</label>
                <input type="number" id="age" value={idade} onChange={idadeChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;