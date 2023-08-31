import styles from "./EstatisticasComponent.module.css"

function EstatisticasComponent({ item }) {
    return (
        <p>Estatísticas: {item.estatisticas}</p>
    )
}

export default EstatisticasComponent