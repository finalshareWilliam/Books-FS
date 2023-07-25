import { styled } from 'styled-components';
import IconeHeader from '../IconeHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';

const HeaderContainer = styled.header
`
    background-color: #fff;
    display: flex;
    justify-content: space-between;    

`
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconeHeader />
        </HeaderContainer>
    )
}

export default Header;