import Button from "./Button";
import Card from "./Card";

import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (

        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}/>          
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.titulo}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.mensagem}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>{props.acao}</Button>
                </footer>
            </Card>
        </div>
    )

}

export default ErrorModal;