import styles from "./NomeComponent.module.css"

function NomeComponent({ id }) {
    return (
        <p>Nome: {id.nome}</p>
    )
}

export default NomeComponent