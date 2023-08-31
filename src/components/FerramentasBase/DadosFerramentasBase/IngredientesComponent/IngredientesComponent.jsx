import styles from "./IngredientesComponent.module.css"

function IngredientesComponent({ item }) {
    return (
        <p>Ingredientes: {item.ingredientes}</p>
    )
}

export default IngredientesComponent