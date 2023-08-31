import styles from "./DescricaoComponent.module.css"

function DescricaoComponent({ id }) {
    return (
        <p>Descrição: {id.descricao}</p>
    )
}

export default DescricaoComponent