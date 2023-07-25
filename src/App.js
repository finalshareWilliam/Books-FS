import Header from './componentes/Header';
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa';

const AppContainer = styled.div
`
    height: 100vh;
    background-image: linear-gradient(180deg, #002f52 30%, #4683af);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
