import { useState, useEffect } from "react"
import styles from "../ConjuntoVarasDePesca/ConjuntoVarasDePesca.module.css"
import ImagensComponent from "../DadosVarasDePesca/ImagensComponent/ImagensComponent.jsx"
import NomeComponent from "../DadosVarasDePesca/NomeComponent/NomeComponent.jsx"
import CustoComponent from "../DadosVarasDePesca/CustoComponent/CustoComponent.jsx"
import RequisitosComponent from "../DadosVarasDePesca/RequisitosComponent/RequisitosComponent.jsx"
import MelhoriasComponent from "../DadosVarasDePesca/MelhoriasComponent/MelhoriasComponent.jsx"

function ConjuntosVarasDePesca({ tipoitem }) {

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
                        <td><RequisitosComponent item={item} /></td>
                        <td><MelhoriasComponent item={item} /></td>
                    </tr>
                ))
            }
        </section>
    )
}

export default ConjuntosVarasDePesca