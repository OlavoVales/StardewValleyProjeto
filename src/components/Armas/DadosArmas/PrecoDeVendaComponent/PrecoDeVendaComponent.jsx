import styles from "./PrecoDeVendaComponent.module.css"

function PrecoDeVendaComponent({ item }) {
    return (
        <p>Preço de Venda: {item.precodevenda}</p>
    )
}

export default PrecoDeVendaComponent