import Header from '../../components/header';
import styled from 'styled-components';
import CarrinhoCard from '../../components/carrinho-card';
import { useCarrinho } from '../../contexts/CarrinhoContext';
import plantasJson from '../../data/plantas.json';

const Wrapper = styled.div`
    text-align: center;
    margin: 4em auto 8em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    gap: 2em;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2em;
    row-gap: 2em;
`

function Carrinho() {

    const { ItensCarrinho } = useCarrinho()

    if(ItensCarrinho.length !== 0){
        return (
            <div className="wrapper-carrinho">
                <Header/>
                
                <Wrapper>
                    <h1 className="titulo">
                        meu carrinho
                    </h1>
    
                    <Grid>
                        {
                            ItensCarrinho.map((el,index) => (
                                <CarrinhoCard
                                    key = {el.id}
                                    id = {el.id}
                                    quantidade = {el.quantidade}
                                />
                            ) )
                        }
                    </Grid>

                    <h4>
                        Total: R$ { 
                            
                            ItensCarrinho.reduce((total, atual) => {
                                const item = plantasJson.find(planta => planta.id === atual.id)
                                return total + item.preco * atual.quantidade
                            }, 0)
                            
                        }
                    </h4>

                </Wrapper>
            </div>
        )
    } else {
        return (
            <div className="wrapper-carrinho">
                <Header/>
                
                <Wrapper>
                    <h1 className="titulo">
                        meu carrinho
                    </h1>
    
                    <h4> Nenhum item ainda </h4>
                </Wrapper>
            </div>
        );
    }

}

export default Carrinho;