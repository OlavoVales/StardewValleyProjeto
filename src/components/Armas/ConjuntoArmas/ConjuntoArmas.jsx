import { useState, useEffect } from "react"
import styles from "./ConjuntosArmas.module.css"
import ImagensComponent from "../DadosArmas/ImagensComponent/ImagensComponent.jsx"
import NomeComponent from "../DadosArmas/NomeComponent/NomeComponent.jsx"
import DescricaoComponent from "../DadosArmas/DescricaoComponent/DescricaoComponent.jsx"
import DanoComponent from "../DadosArmas/DanoComponent/DanoComponent.jsx"
import ChanceDeAcertoCriticoComponent from "../DadosArmas/ChanceDeAcertoCriticoComponent/ChanceDeAcertoCriticoComponent.jsx"
import EstatisticasComponent from "../DadosArmas/EstatisticasComponent/EstatisticasComponentt.jsx"
import LocalizacaoComponent from "../DadosArmas/LocalizacaoComponent/LocalizacaoComponent.jsx"
import PrecoDeCompraComponent from "../DadosArmas/PrecoDeCompraComponent/PrecoDeCompraComponent.jsx"
import PrecoDeVendaComponent from "../DadosArmas/PrecoDeVendaComponent/PrecoDeVendaComponent.jsx"

function ConjuntosArmas({ lista }) {

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
                        <DescricaoComponent item={item} />
                        <DanoComponent item={item} />
                        <EstatisticasComponent item={item} />
                        <ChanceDeAcertoCriticoComponent item={item} />
                        <LocalizacaoComponent item={item} />
                        <PrecoDeCompraComponent item={item} />
                        <PrecoDeVendaComponent item={item} />
                    </div>
                ))
            }
        </section>
    )
}

export default ConjuntosArmas