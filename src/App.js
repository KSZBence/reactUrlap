import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kezdolap from './pages/Kezdolap';
import Layout from './layout';
import Adatok from './pages/Adatok';
import NoPage from './pages/NoPage';
import Urlap from './pages/Urlap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Kezdolap />} />
                        <Route path="urlap" element={<Urlap />} />
                        <Route path="adatok" element={<Adatok />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>

  );
}

export default App;
