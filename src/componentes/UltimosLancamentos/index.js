import { styled } from "styled-components";
import { livros } from "./DadosUltimosLancamento";

const UltimosLancamentosContainer = styled.section
    `
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;

`
const Titulo = styled.h2
    `
    width:100%;
    padding: 30px 0;
    background-color: #fff;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NovosLivrosContainer = styled.div
    `
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo>Ultimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(test => (
                    <img src={test.src} alt="Lancamento de livros" />
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos;