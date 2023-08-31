import styles from "./RequisitosComponent.module.css"

function RequisitosComponent({ item }) {
    return (
        <p>Requisitos: {item.requisitos}</p>
    )
}

export default RequisitosComponent