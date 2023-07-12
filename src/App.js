import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ModelPage from './components/pages/models/ModelPage'
import MainPage from './components/pages/main/MainPage';
import ConfiguratorPage from './components/pages/configurator/ConfiguratorPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={[<MainPage/>]} />
          <Route path='/models' element={[<ModelPage/>]} />
          <Route path='/configuration' element={[<ConfiguratorPage/>]} />
          <Route path='/userSupport' element={[]} />
          <Route path='/dilers' element={[]} />
          <Route path='/contacts' element={[]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
