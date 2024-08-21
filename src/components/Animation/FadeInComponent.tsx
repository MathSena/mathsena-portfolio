import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FadeInComponent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div data-aos="fade-up">
            Este conteúdo vai fazer fade-in ao rolar para ele.
        </div>
    );
};

export default FadeInComponent;
