import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
    useEffect(() => {
        AOS.init({
            // Você pode adicionar opções aqui, como delay, duration, etc.
            duration: 800,
            once: true, // Anima apenas uma vez ao entrar na visão
        });
    }, []);

    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
}

export default App;
