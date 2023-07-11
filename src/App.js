import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ModelPage from './components/pages/models/ModelPage'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={[]} />
          <Route path='/models' element={[<ModelPage/>]} />
          <Route path='/configuration' element={[]} />
          <Route path='/userSupport' element={[]} />
          <Route path='/dilers' element={[]} />
          <Route path='/contacts' element={[]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
