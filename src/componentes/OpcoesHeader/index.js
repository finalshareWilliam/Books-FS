import './estilo.css';

function OpcoesHeader() {

    const textoOpcoes = ['Catergorias', 'Favoritos', 'Minha Estante']
    return (
        <ul className='opcoes'>
            {textoOpcoes.map((texto) => (
                <li className='opcao'> <p>{texto}</p> </li>
            ))}
        </ul>
    )
}

export default OpcoesHeader;