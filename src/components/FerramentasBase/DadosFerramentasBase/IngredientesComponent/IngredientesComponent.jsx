import styles from "./IngredientesComponent.module.css"

function IngredientesComponent({ id }) {
    return (
        <p>Ingredientes: {id.ingredientes}</p>
    )
}

export default IngredientesComponent