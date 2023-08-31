import styles from "./PrecoDeCompraComponent.module.css"

function PrecoDeCompraComponent({ id }) {
    return (
        <p>Preço de Compra: {id.preco-de-compra}</p>
    )
}

export default PrecoDeCompraComponent