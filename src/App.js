import './App.css';
import IconeHeader from './componentes/IconeHeader';
import Logo from './componentes/Logo';
import OpcoesHeader from './componentes/OpcoesHeader';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <OpcoesHeader />
        <IconeHeader />
      </header>
    </div>
  );
}

export default App;
