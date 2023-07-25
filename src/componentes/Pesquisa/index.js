import { styled } from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section
    `   
    justify-content: center;
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%
`
const Titulo = styled.h2
    `
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3
    `
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div
`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    cursor: pointer;

    p{
        width: 200px;
    }

    img {
        width: 10%;
    }

    &:hover{
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    console.log(livrosPesquisados)

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }} />
            {livrosPesquisados.map(livro => (
                <Resultado>
                    <img src={livro.src} />
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;