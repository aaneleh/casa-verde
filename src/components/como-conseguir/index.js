import styled from 'styled-components'
import Planta from '../../assets/planta-como-conseguir.png';

const Grid = styled.div`
    width: min(1000px, 100%);
    height: 29em;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr;

    background: white;
    overflow:hidden;
    margin-left: auto;
    margin-right: auto;
    img {
        object-position: top 10px;
    }
    @media screen and (max-width: 832px){
        height: 45em;
        grid-template-columns: 1fr;
        grid-template-rows: 17.5em 30em;
        text-align: center;
    }
`

const Instrucoes = styled.div`
    height: 29em;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 1em;

    line-height: 2.5em;
`
const Circulo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #FFCB47;
`
const Item = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
`

function ComoConseguir() {
    return (
        <Grid className="como-conseguir sombra" id="como-conseguir">
            <div className="image-container">
                <img src={Planta} alt="planta"></img>
            </div>
            <Instrucoes className='instrucoes'>
                <div>
                    <h4>
                        Como conseguir
                    </h4>
                    <h2 className='titulo'>
                        minha planta
                    </h2>
                </div>
                <Item>
                    <Circulo></Circulo>
                    <h4> Escolha suas plantas </h4>
                </Item>
                <Item>
                    <Circulo></Circulo>
                    <h4> Faça seu pedido </h4>
                </Item>
                <Item>
                    <Circulo></Circulo>
                    <h4> Aguarde na sua casa </h4>
                </Item>
            </Instrucoes>
        </Grid>
    );
}

export default ComoConseguir;