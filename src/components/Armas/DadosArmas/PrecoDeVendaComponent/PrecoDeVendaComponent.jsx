import styles from "./PrecoDeVendaComponent.module.css"

function PrecoDeVendaComponent({ item }) {
    return (
        <p>Preço de Venda: {item.preco-de-venda}</p>
    )
}

export default PrecoDeVendaComponent