import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Menus from './Pages/Menus';
import CreateMenu from './Pages/CreateMenu';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/create-menu" element={<CreateMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
