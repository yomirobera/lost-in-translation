import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import LoginPage from './views/LoginPage';
import TranslationPage from './views/TranslationPage';
import ProfilePage from './views/ProfilePage';

function App() {
 
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path="/LoginPage"element={< LoginPage />}/>
        <Route path="/TranslationPage" element={< TranslationPage />}/>
        <Route path="/ProfilePage" element={< ProfilePage />}/>
      </Routes>

     <h1>Lost in Translation.........</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
