import styles from "./CustoComponent.module.css"

function CustoComponent({ id }) {
    return (
        <p>Custo: {id.custo}</p>
    )
}

export default CustoComponent