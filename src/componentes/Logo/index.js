import './estilo.css';
import logo from '../../imagens/logo.svg';

function Logo() {
    return (
        <div className='logo'>
            <img
                src={logo}
                alt='logo da alurabooks' />
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo;