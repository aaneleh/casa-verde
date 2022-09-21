import { Link } from 'react-router-dom';
import styled from 'styled-components';
import plantasJson from '../../data/plantas.json';

const Card = styled.div`
    height: 12.5em;
    width: 30em;

    background-color: #fff;
    overflow-y:hidden;

    position: fixed;
    bottom: 4em;
    right: 1em;
    z-index: 1000;

    display: grid;
    align-items: top;
    grid-template-columns: 1fr 1fr;
`
const Fechar = styled.button`
    position: absolute;
    z-index: 1000;
    top: 1em;
    left: 1em;
    cursor: pointer;
    background: transparent;
    border: none;
    font-size: 1.25em;
`
const Descricao = styled.div`
    height: 12.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    text-align: left;
`
const Botao = styled.p`
    color: #fff;
    background: #FFCB47;
    font-size: 1.25em;
    width: fit-content;
    padding: 0.25em 0.5em;
    border-radius: 5px;
    display: grid;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

function CarrinhoPopUp(props) {

    const id = props.id;

    const planta = plantasJson.find(item => item.id === id);

    if (planta == null) {
        return null;
    }
    
    return (props.trigger) ? (
        <Card className="pop-up sombra">

            <Fechar onClick={() => props.setTrigger(false) }>
                X
            </Fechar>
            

            <div className="image-container">
                <img src={planta.imagem} alt={planta.nome}></img>
            </div>

            <Descricao>
                <h4 className='bold'> { planta.nome }  </h4>
                <p> Foi adicionado ao carrinho </p>
                <Botao>
                    <Link to="/carrinho">
                        Ver no carrinho
                    </Link>
                </Botao>
            </Descricao> 

        </Card>
    ) : "";

}

export default CarrinhoPopUp;