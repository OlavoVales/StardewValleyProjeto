import styles from "./EstatisticasComponent.module.css"

function EstatisticasComponent({ id }) {
    return (
        <p>Estatísticas: {id.estatisticas}</p>
    )
}

export default EstatisticasComponent