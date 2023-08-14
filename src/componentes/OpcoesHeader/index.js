import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Opcoes = styled.ul
    `
    display: flex;
`

const Opcao = styled.li
    `   
    min-width: 200px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`

function OpcoesHeader() {

    const textoOpcoes = ['Catergorias', 'Favoritos', 'Minha Estante']
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link to={`/${texto.toLowerCase()}`}> <Opcao> <p>{texto}</p> </Opcao> </Link>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;