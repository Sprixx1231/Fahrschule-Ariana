import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './pages/start.js';
import Agbs from './pages/agbs.js'
import BegleitetesFahren from './pages/begleitetes-fahren.js'
import FuehrerscheinKlassen from './pages/fuehrerscheinklassen.js'
import Impressum from "./pages/impressum";
import Pruefung from "./pages/pruefung";
import PraktischerUnterricht from "./pages/praktischer-unterricht";
import TheoretischerUnterricht from "./pages/theoretischer-unterricht";


function App() {
    return (
            <Router>
                    <Navbar />
                <Routes>
                    <Route path='/' exact element={<Start/>} />
                    <Route path='/start' element={<Start/>} />
                    <Route path='/fuehrerscheinklassen' element={<FuehrerscheinKlassen/>} />
                    <Route path='/praktischer-unterricht' element={<PraktischerUnterricht/>} />
                    <Route path='/theoretischer-unterricht' element={<TheoretischerUnterricht/>} />
                    <Route path='/begleitetes-fahren' element={<BegleitetesFahren/>} />
                    <Route path='/pruefung' element={<Pruefung/>} />
                    <Route path='/impressum' element={<Impressum/>} />
                    <Route path='/agbs' element={<Agbs/>} />
                </Routes>
            </Router>
    );
}

export default App