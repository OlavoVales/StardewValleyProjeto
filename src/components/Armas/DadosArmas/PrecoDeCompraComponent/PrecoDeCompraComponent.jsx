import styles from "./PrecoDeCompraComponent.module.css"

function PrecoDeCompraComponent({ item }) {
    return (
        <p>Preço de Compra: {item.preco-de-compra}</p>
    )
}

export default PrecoDeCompraComponent