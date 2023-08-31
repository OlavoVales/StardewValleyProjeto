import styles from "./NivelComponent.module.css"

function NivelComponent({ item }) {
    return (
        <p>Nível: {item.nivel}</p>
    )
}

export default NivelComponent