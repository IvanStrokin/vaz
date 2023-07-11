import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={[]} />
          <Route path='/models' element={[]} />
          <Route path='/' element={[]} />
          <Route path='' element={[]} />
          <Route path='' element={[]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
