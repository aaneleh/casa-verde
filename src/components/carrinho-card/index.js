import styled from 'styled-components';
import { useCarrinho } from '../../contexts/CarrinhoContext';
import plantasJson from '../../data/plantas.json';

const Card = styled.div`
    height: 12.5em;
    display: flex;
    background-color: #fff;
    overflow-y:hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Produto = styled.div`
    height: 12.5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Descricao = styled.div`
    height: 12.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    text-align: left;
`
const Quantidades = styled.div`
    height: 12.5em;
    gap: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Botao = styled.p`
    color: #fff;
    background: #FFCB47;
    width: 45px;
    height: 45px;
    font-size: 2em;
    border-radius: 5px;
    display: grid;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

function CarrinhoCard({ id, quantidade }) {
    
    const { aumentaQuantidade, diminuiQuantidade } = useCarrinho();

    const planta = plantasJson.find(item => item.id === id);

    if (planta == null) {
        return null;
    }
    return (
        <Card className="oferta-card sombra">
            <Produto> 
                <div className="image-container">
                    <img src={planta.imagem} alt={planta.nome}></img>
                </div>
                <Descricao>
                    <h4> { planta.nome } </h4>
                    <p> R$ { planta.preco } </p>
                </Descricao>
            </Produto>
            <Quantidades>
                <Botao onClick={ () => diminuiQuantidade(id)}>
                    -
                </Botao>
                <h3> {quantidade} </h3>
                <Botao onClick={ () => aumentaQuantidade(id)}>
                    +
                </Botao>
            </Quantidades>
        </Card>
    );

}

export default CarrinhoCard;