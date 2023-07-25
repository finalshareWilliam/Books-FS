import Header from './componentes/Header';
import styled from 'styled-components'

const AppContainer = styled.div
`
    height: 100vh;
    background-image: linear-gradient(180deg, #002f52 30%, #4683af);
`

function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}

export default App;
