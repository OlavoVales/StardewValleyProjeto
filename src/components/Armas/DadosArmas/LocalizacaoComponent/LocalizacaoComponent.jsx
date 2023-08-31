import styles from "./LocalizacaoComponent.module.css"

function LocalizacaoComponent({ id }) {
    return (
        <p>Localização: {id.localizacao}</p>
    )
}

export default LocalizacaoComponent