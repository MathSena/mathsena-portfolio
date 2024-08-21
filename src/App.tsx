import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experiences';
import Education from './components/Education/Education';

function App() {
    useEffect(() => {
        AOS.init({
            // Você pode adicionar opções aqui, como delay, duration, etc.
            duration: 800, // Duração da animação
            once: true, // Anima apenas uma vez ao entrar na visão
            delay: 50, // Delay inicial para as animações
            easing: 'ease-in-out', // Tipo de "ease" para as animações
        });
    }, []);

    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Footer />
        </>
    );
}

export default App;
