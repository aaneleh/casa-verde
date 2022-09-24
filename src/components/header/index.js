import logo from '../../assets/logo.svg';
import lista from '../../assets/lista.svg';
import fechar from '../../assets/fechar.svg';
import styled from 'styled-components'
import {Link} from "react-router-dom"
import { useState } from 'react';

const Wrapper= styled.header`
    height: 4em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    top: 0;
    left: 0;
`
const MenuIcone = styled.div`
    position: absolute;
    top: 0;
    right: 2em;
    transform: scale(2);
    cursor: pointer;
    @media screen and (min-width: 880px) {
        transform: translateX(200vw);
    }
`
const FecharIcone = styled.li`
    display: flex;
    align-self: center;
    cursor: pointer;
    transform: scale(1.25);
`
const MenuMobile = styled.ul`
    position: fixed;
    width: 10em;
    height: 100vh;
    background-color: #fff;
    top: 0em;
    right: 0em;
    padding: 0 4em;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    justify-content: center;
    gap: 5em;
    transition: transform 0.3s;

    @media screen and (min-width: 880px) {
        transform: translateX(200%);
    }

`
const MenuDesktop = styled.ul`
    position: relative;
    list-style: none;
    display: inline-flex;
    gap: 1em;
    li:before {
        content: " / ";
        margin-right: 1em;
    }
    li:first-child:before {
        content: "   ";
    }
    @media screen and (max-width: 880px) {
        transform: translateX(200%);
    }
`

function Header() {

    const [ sideBar, setSideBar ] = useState(false);

    return (
        <Wrapper id="header" className='header'>
            <Link to="/">
                <div>
                    <img src={logo} alt="🌿 Casa Verde"></img>
                </div>
            </Link>
            <div>
                <MenuDesktop>
                    <li>
                        <a href="/#como-conseguir">
                        Como Conseguir
                        </a>
                    </li>
                    <li>
                        <a href="/#ofertas">
                            Ofertas
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Depoimentos
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Vídeo
                        </a>
                    </li>
                    <li>
                        <Link to="/carrinho">
                            Meu carrinho
                        </Link>
                    </li>
                </MenuDesktop>
            
                <MenuIcone onClick={() => setSideBar(true)}> 
                    <img src={lista} alt="🌿 Casa Verde"></img>
                </MenuIcone>
                <MenuMobile className="sidebar" style={sideBar ? {transform: "translateX(0)"} : {transform: "translateX(200%)"} }>
                    <FecharIcone onClick={() => setSideBar(false)}>
                        <img src={fechar} alt="X"></img>
                    </FecharIcone>
                    <li>
                        <a href="/#como-conseguir">
                            Como Conseguir
                        </a>
                    </li>
                    <li>
                        <a href="/#ofertas">
                            Ofertas
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Depoimentos
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Vídeo
                        </a>
                    </li>
                    <li>
                        <Link to="/carrinho">
                            Meu carrinho
                        </Link>
                    </li>
                </MenuMobile>
            </div>
        </Wrapper>
    );
}

export default Header;