import { styled } from 'styled-components';
import IconeHeader from '../IconeHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header
`
    background-color: #fff;
    display: flex;
    justify-content: space-between;    

`
function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <OpcoesHeader />
            <IconeHeader />
        </HeaderContainer>
    )
}

export default Header;