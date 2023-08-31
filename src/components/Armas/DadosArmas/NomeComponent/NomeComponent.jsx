import styles from "./NomeComponent.module.css"

function NomeComponent({ item }) {
    return (
        <p>Nome: {item.nome}</p>
    )
}

export default NomeComponent