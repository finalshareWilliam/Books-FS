import styled from 'styled-components'
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';

const AppContainer = styled.div
`
    height: 100vh;
    background-image: linear-gradient(180deg, #002f52 30%, #4683af);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
