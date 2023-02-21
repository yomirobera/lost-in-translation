import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import LoginPage from './views/LoginPage';
import TranslationPage from './views/TranslationPage';
import ProfilePage from './views/ProfilePage';
import Navbar from './components/Navbar/Navbar';

function App() {
 
  return (
    <BrowserRouter>
     <div className="App">
     <header className='welcome'>Lost in translation</header>
      <Navbar className='Navigation'/>
      <Routes>
        <Route path="/" element={< LoginPage />}/>
        <Route path="/TranslationPage" element={< TranslationPage />}/>
        <Route path="/ProfilePage" element={< ProfilePage />}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
