import { useState, useEffect } from "react"
import styles from "./ConjuntoFerramentasBase.module.css"
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
                    <div key={item.id} className={styles.item}>
                        <ImagensComponent item={item} />
                        <NomeComponent item={item} />
                        <CustoComponent item={item} />
                        <IngredientesComponent item={item} />
                        <MelhoriasComponent item={item} />
                    </div>
                ))
            }
        </section>
    )
}

export default ConjuntosFerramentasBase