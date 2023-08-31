import styles from "./CustoComponent.module.css"

function CustoComponent({ item }) {
    return (
        <p>Custo: {item.custo}</p>
    )
}

export default CustoComponent