import styles from './ImagensComponent.module.css'

function ImagensComponent({ item }) {
    return (
        <h3><img src={`/imgs/armas/${item.tipoitem}/${item.nome}.png`}/></h3>
    )
}

export default ImagensComponent