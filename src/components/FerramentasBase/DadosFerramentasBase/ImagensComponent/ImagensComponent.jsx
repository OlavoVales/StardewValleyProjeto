import styles from './ImagensComponent.module.css'

function ImagensComponent({ item }) {
    return (
        <h3><img src={`/imgs/ferramentas/${item.tipoitem}/${item.nome}.png`}/></h3>
    )   {/* seria mais esquema ter adicionado um elemento imagem no .json com o URL da imagem do que ter feito assim, mas agr que já fiz deixa assim */}
}

export default ImagensComponent