import styles from "./LocalizacaoComponent.module.css"

function LocalizacaoComponent({ item }) {
    return (
        <p>Localização: {item.localizacao}</p>
    )
}

export default LocalizacaoComponent