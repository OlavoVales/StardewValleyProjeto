import styles from "./NivelComponent.module.css"

function NivelComponent({ id }) {
    return (
        <p>Nível: {id.nivel}</p>
    )
}

export default NivelComponent