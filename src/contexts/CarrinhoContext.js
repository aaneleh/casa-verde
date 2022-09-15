import { useContext, createContext, useState } from 'react';

const CarrinhoContexto = createContext({});

export function useCarrinho(){
    return useContext(CarrinhoContexto);
}

export function CarrinhoProvider( { children } ) {
    const [ItensCarrinho, setItensCarrinho] = useState([]);

    function getQuantidade(id){
        //procura a quantidade do id especificado, se naõ retorna 0
        return ItensCarrinho.find(item => item.id === id)?.quantity || 0;
    }
    
    function aumentaQuantidade(id){
        //modifica as informações no carrinho baseado nos ifs abaixo
        setItensCarrinho( ItensAtuais => {
            //procura o id especificado
            if(ItensAtuais.find(item => item.id === id) == null){
                //se não achar, mantem o carrinho igual, adicionando esse id com a quantidade 1
                return [...ItensAtuais, { id, quantidade: 1}]
            //se o item já está no carrinho, procura ele e aumenta sua quantidade
            } else {
                //passa por cada item
                return ItensAtuais.map(item => {
                    //para cada item, checa se o id passado é == o id do item
                    if(item.id === id){
                        //se for o id certo, set o state mudando apenas a quantidade no id especificado
                        return {...item, quantidade: item.quantidade+1}
                    //se não for o id especificado, mantem o item igual
                    } else {
                        return item;
                    }
                })
            }
        })

    }

    function diminuiQuantidade(id){
        //seta o carrinho baseado nos ifs
        setItensCarrinho( ItensAtuais => {
            //procura o item e, se encontrar e a sua quantidade for === 1, remove do carrinho
            if(ItensAtuais.find(item => item.id === id)?.quantidade === 1){
                //seta o carrinho para todos os items com um id diferente do id especificado para removê-lo da lista
                return ItensAtuais.filter(item => item.id !== id);
            } else {
                //passa por todos os itens
                return ItensAtuais.map(item => {
                    //se o id do item for === o id passado
                    if(item.id === id){
                        //seta o carrinho mudando apenas a quantidade do item com esse id
                        return {...item, quantidade: item.quantidade-1}
                    //se não for o id especificado, mantem o item igual
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    return (
        <CarrinhoContexto.Provider value={ { ItensCarrinho, getQuantidade, aumentaQuantidade, diminuiQuantidade } }>
            { children }
        </CarrinhoContexto.Provider> 
    )
}