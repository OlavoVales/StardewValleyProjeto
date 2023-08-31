import styles from "./MelhoriasComponent.module.css"

function MelhoriasComponent({ item }) {
    return (
        <p>Melhorias: {item.melhorias}</p>
    )
}

export default MelhoriasComponent