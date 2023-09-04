import { useState, useEffect } from "react"
import styles from "./ConjuntoArmas.module.css"
import ImagensComponent from "../DadosArmas/ImagensComponent/ImagensComponent.jsx"
import NomeComponent from "../DadosArmas/NomeComponent/NomeComponent.jsx"
import DescricaoComponent from "../DadosArmas/DescricaoComponent/DescricaoComponent.jsx"
import DanoComponent from "../DadosArmas/DanoComponent/DanoComponent.jsx"
import ChanceDeAcertoCriticoComponent from "../DadosArmas/ChanceDeAcertoCriticoComponent/ChanceDeAcertoCriticoComponent.jsx"
import EstatisticasComponent from "../DadosArmas/EstatisticasComponent/EstatisticasComponent.jsx"
import LocalizacaoComponent from "../DadosArmas/LocalizacaoComponent/LocalizacaoComponent.jsx"
import PrecoDeCompraComponent from "../DadosArmas/PrecoDeCompraComponent/PrecoDeCompraComponent.jsx"
import PrecoDeVendaComponent from "../DadosArmas/PrecoDeVendaComponent/PrecoDeVendaComponent.jsx"

function ConjuntosArmas({ tipoitem }) {

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
                        <td><DescricaoComponent item={item} /></td>
                        <td><DanoComponent item={item} /></td>
                        <td><EstatisticasComponent item={item} /></td>
                        <td><ChanceDeAcertoCriticoComponent item={item} /></td>
                        <td><LocalizacaoComponent item={item} /></td>
                        <td><PrecoDeCompraComponent item={item} /></td>
                        <td><PrecoDeVendaComponent item={item} /></td>
                    </tr>
                ))
            }
        </section>
    )
}

export default ConjuntosArmas