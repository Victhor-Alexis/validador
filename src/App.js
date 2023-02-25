import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dados from './pages/Dados';
import DadosAdmin from './pages/DadosAdmin';
import Home from './pages/Home';
import Scan from './pages/Scan';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/dados" element={<Dados/>}/>
          <Route exact path="/dadosAdmin" element={<DadosAdmin/>}/>
          <Route exact path="/scan" element={<Scan/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
