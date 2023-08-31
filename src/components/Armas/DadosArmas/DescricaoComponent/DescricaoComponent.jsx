import styles from "./DescricaoComponent.module.css"

function DescricaoComponent({ item }) {
    return (
        <p>Descrição: {item.descricao}</p>
    )
}

export default DescricaoComponent