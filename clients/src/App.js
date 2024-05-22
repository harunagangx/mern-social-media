import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
