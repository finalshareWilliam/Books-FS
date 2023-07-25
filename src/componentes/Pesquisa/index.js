import { styled } from "styled-components";
import Input from "../Input";
import { useState } from "react";

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

function Pesquisa () {
    const [textoDigitado, setTextoDigitado]  = useState('')

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input placeholder="Escreva sua próxima leitura" onBlur={evento => setTextoDigitado(evento.target.value)}/>
        </PesquisaContainer>
    )
}

export default Pesquisa;