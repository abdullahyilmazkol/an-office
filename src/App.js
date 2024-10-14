import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects  from './Pages/Projects'; // Proje bileşenlerini içe aktarıyoruz
import ProjectDetail from './Components/ProjectDetail'
import Awards from './Pages/Awards';
import Contact from './Pages/Contact';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} /> {/* Proje Listesi */}
                        <Route path="/projects/:id" element={<ProjectDetail />} /> {/* Proje Detay Sayfası */}
                        <Route path="/awards" element={<Awards />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
