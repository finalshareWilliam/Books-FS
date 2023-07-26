import { styled } from "styled-components";
import { livros } from "./DadosUltimosLancamento";
import CardRecomenda from "../CardRecomenda";
import { Titulo } from "../Titulo";
import imagemLivro from "../../imagens/livro2.png";

const UltimosLancamentosContainer = styled.section
    `
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;

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
            <Titulo
                cor="#EB9B00"
                fonte="30px"
                align="center"
            >
                Últimos Lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(test => (
                    <img src={test.src} alt="Lancamento de livros" />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvez você se interesse por:"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação integrada com a plataforma Google."
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos;