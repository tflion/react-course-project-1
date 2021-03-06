import React, { useState } from 'react'

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [idade, setIdade] = useState('');
    const [erro,setErro] = useState();

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (nomeUsuario.trim().length === 0 || idade.trim().length === 0) {
            setErro({
                titulo: 'Dados Vazios',
                mensagem: 'Favor inserir um nome e uma idade (sem resultados vazios).',
                acao: 'OK'
            });
            return;
        } 

        if (+idade < 1) {
            setErro({
                titulo: 'Idade inválida',
                mensagem: 'Favor inserir uma idade válida (maior que 0).',
                acao: 'Desculpa'
            });
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

    const erroHandler = () => {
        setErro(null);
    }

    return (
        <div>
            {erro && <ErrorModal titulo={erro.titulo} mensagem={erro.mensagem} acao={erro.acao} onConfirm={erroHandler} />}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">Nome:</label>
                    <input type="text" id="username" value={nomeUsuario} onChange={nomeUsuarioChangeHandler} />
                    <label htmlFor="age">Idade:</label>
                    <input type="number" id="age" value={idade} onChange={idadeChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;