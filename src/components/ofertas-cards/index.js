import seta from '../../assets/seta.svg';
import styled from 'styled-components';
import { useCarrinho } from '../../contexts/CarrinhoContext';

import CarrinhoPopUp from '../carrinho-pop-up';
import { useState } from 'react';

const Card = styled.div`
    height: 12.5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #fff;
    overflow-y:hidden;
    position: relative;
    z-index: -1;
`
const Descricao = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    height: 12.5em;
    padding: 0 1em;
    gap: 0.75em;
    justify-content: center;
`
const Botao = styled.button`
    margin-top: 0.5em;
    color: #FFCB47;
    display: inline-flex;
    gap: 2em;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 1em;
`

function OfertasCard({ id, imagem, nome, preco }) {
    
    const { aumentaQuantidade } = useCarrinho();

    const [ statusPopUp, setStatusPopUp] = useState(false);

    const comprar = () => {
        aumentaQuantidade(id);
        setStatusPopUp(true);
    }

    return (
        <Card className="oferta-card sombra">
            <div className="image-container">
                <img src={imagem} alt={nome}></img>
            </div>
            <Descricao>
                <h3 className="titulo">
                    {nome}
                </h3>
                <p>
                    R${preco}
                </p>
                <Botao onClick={comprar}>
                    Comprar 
                    <img src={seta} alt="->"></img>
                </Botao>
            </Descricao>
            
            <CarrinhoPopUp trigger={statusPopUp} setTrigger={setStatusPopUp} id={id}/>
        </Card>
    );
}

export default OfertasCard;