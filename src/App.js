import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='' element={[<Header/>]}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
