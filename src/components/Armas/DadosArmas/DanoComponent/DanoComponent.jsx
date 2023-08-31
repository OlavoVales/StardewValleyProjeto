import styles from "./DanoComponent.module.css"

function DanoComponent({ item }) {
    return (
        <p>Dano: {item.dano}</p>
    )
}

export default DanoComponent