import { useState, useEffect } from "react"
import styles from "../ConjuntoFerramentasBase/ConjuntoFerramentasBase.module.css"
import ImagensComponent from "../DadosFerramentasBase/ImagensComponent/ImagensComponent.jsx"
import NomeComponent from "../DadosFerramentasBase/NomeComponent/NomeComponent.jsx"
import CustoComponent from "../DadosFerramentasBase/CustoComponent/CustoComponent.jsx"
import IngredientesComponent from "../DadosFerramentasBase/IngredientesComponent/IngredientesComponent.jsx"
import MelhoriasComponent from "../DadosFerramentasBase/MelhoriasComponent/MelhoriasComponent.jsx"

function ConjuntosFerramentasBase({ tipoitem }) {

    const [ itens, setItens ] = useState([])
    const url = `https://raw.githubusercontent.com/OlavoVales/StardewValleyAPI/main/${tipoitem}-stardew-valley.json`

    useEffect(() => {
        const buscarItens = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setItens(data)
        }
        buscarItens()
    }, [url])

    return (
        <section className={styles.itens}>
            {
                itens.map( item => (
                    <tr key={item.id} className={styles.item}>
                        <td><ImagensComponent item={item} /></td>
                        <td><NomeComponent item={item} /></td>
                        <td><CustoComponent item={item} /></td>
                        <td><IngredientesComponent item={item} /></td>
                        <td><MelhoriasComponent item={item} /></td>
                    </tr>
                ))
            }
        </section>
    )
}

export default ConjuntosFerramentasBase