import logo from '../../assets/logo.svg';
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Wrapper= styled.header`
    height: 4em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
const Menu = styled.ul`
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
`

function Header() {
    return (
        <Wrapper id="header">
            <Link to="/">
                <div>
                    <img src={logo} alt="🌿 Casa Verde"></img>
                </div>
            </Link>
            <div>
                <Menu>
                    <li>
                        <a href="#como-conseguir">
                        Como Conseguir
                        </a>
                    </li>
                    <li>
                        <a href="#ofertas">
                            Ofertas
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Depoimentos
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Vídeo
                        </a>
                    </li>
                    <li>
                        <Link to="/carrinho">
                            Meu carrinho
                        </Link>
                    </li>
                </Menu>
            </div>

        </Wrapper>
    );
}

export default Header;