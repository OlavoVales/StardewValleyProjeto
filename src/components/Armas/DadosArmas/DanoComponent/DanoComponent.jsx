import styles from "./DanoComponent.module.css"

function DanoComponent({ id }) {
    return (
        <p>Dano: {id.dano}</p>
    )
}

export default DanoComponent