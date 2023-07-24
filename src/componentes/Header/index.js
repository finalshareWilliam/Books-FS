import IconeHeader from '../IconeHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import './estilo.css';

function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OpcoesHeader />
            <IconeHeader />
        </header>
    )
}

export default Header;