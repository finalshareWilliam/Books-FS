import styled from 'styled-components'
import Pesquisa from '../componentes/Pesquisa';

const AppContainer = styled.div
`
    height: 100vh;
    background-image: linear-gradient(180deg, #002f52 30%, #4683af);
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
