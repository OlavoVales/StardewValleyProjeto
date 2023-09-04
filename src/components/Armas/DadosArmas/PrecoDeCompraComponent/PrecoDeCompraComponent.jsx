import styles from "./PrecoDeCompraComponent.module.css"

function PrecoDeCompraComponent({ item }) {
    return (
        <p>Preço de Compra: {item.precodecompra}</p>
    )
}

export default PrecoDeCompraComponent