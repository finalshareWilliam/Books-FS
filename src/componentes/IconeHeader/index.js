import './estilo.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

function IconeHeader() {
    const icones = [perfil, sacola]
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'>
                    <img src={icone} alt="icone"></img>
                </li>
            ))}
        </ul>
    )
}

export default IconeHeader;