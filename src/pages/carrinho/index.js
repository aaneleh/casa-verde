import Header from '../../components/header';
import styled from 'styled-components';
import CarrinhoCard from '../../components/carrinho-card';
import { useCarrinho } from '../../contexts/CarrinhoContext';

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

    if(ItensCarrinho){
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
    
                    <h4> nenhum item ainda </h4>
                </Wrapper>
            </div>
        );


    }


}

export default Carrinho;