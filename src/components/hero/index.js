import styled from 'styled-components'
import Newsletter from '../newsletter';
import Planta from '../../assets/planta-hero.png';

const Container = styled.div`
    margin-top: 5em;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    gap: 1em;

    width: min(30em, 100%);
    p {
        line-height: 1.75em;
    }
`
const PlantaEl = styled.img`
    position: absolute;
    z-index: 10;
    top: -50px;
    right: 50px;
`


function Hero() {
    return (
        <>
            <Container>
                <h4>
                    Sua casa com as
                </h4>
                <h1 className="titulo">
                    melhores plantas
                </h1>
                <p>
                    Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                </p>
                <Newsletter/>
            </Container>
            
            <PlantaEl src={Planta}></PlantaEl>        
        </>
    );
}

export default Hero;