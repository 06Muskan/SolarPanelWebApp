// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Financing from './Pages/Financing';
import Contact from './Pages/Contact';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Main from './Pages/Main';
import Login from "./Pages/Login";
import Newinformation from './Pages/NewInformation';

const App = () => {
    return (
        <>
          <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/apply" element={<Financing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/newInformation" element={<Newinformation />} />
            </Routes>
        </Router> 
        </>       
    );
};

export default App;
