import { useState, useEffect } from "react"
import styles from "./ConjuntoVarasDePesca.module.css"
import ImagensComponent from "../DadosVarasDePesca/ImagensComponent/ImagensComponent.jsx"
import NomeComponent from "../DadosVarasDePesca/NomeComponent/NomeComponent.jsx"
import CustoComponent from "../DadosVarasDePesca/CustoComponent/CustoComponent.jsx"
import RequisitosComponent from "../DadosVarasDePesca/RequisitosComponent/RequisitosComponent.jsx"
import MelhoriasComponent from "../DadosVarasDePesca/MelhoriasComponent/MelhoriasComponent.jsx"

function ConjuntosVarasDePesca({ lista }) {

    const [ itens, setItens ] = useState([])
    const url = `https://raw.githubusercontent.com/OlavoVales/StardewValleyAPI/main/${lista}-stardew-valley.json`

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
                        <RequisitosComponent item={item} />
                        <MelhoriasComponent item={item} />
                    </div>
                ))
            }
        </section>
    )
}

export default ConjuntosVarasDePesca