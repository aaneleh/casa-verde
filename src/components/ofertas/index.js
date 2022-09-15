import React from 'react';
import styled from 'styled-components';
import OfertasCard from '../ofertas-cards';
import plantasJson from '../../data/plantas.json';

const Wrapper = styled.div`
    text-align: center;
    margin: 4em auto 8em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    column-gap: 2em;
    row-gap: 2em;
`

function Ofertas() {

    return (
        <Wrapper className="ofertas" id="ofertas">
            <h4>
                Conheça nossas
            </h4>
            <h1 className="titulo">
                ofertas
            </h1>
            <Grid className="grid-ofertas">
                {plantasJson.map((el, index) => (
                    <OfertasCard
                        key = {index}
                        id = {el.id}
                        imagem = {el.imagem}
                        nome = {el.nome}
                        preco = {el.preco}
                    />
                ) )}
            </Grid>
        </Wrapper>
    );
}

export default Ofertas;