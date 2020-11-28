import React, { useEffect } from 'react';
import './Animation.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Animation = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className="grid">
            <div className="boxes">1</div>
            <div className="boxes">2</div>
            <div data-aos="fade-up" className="boxes">3</div>
            <div data-aos="fade-left" className="boxes">4</div>
            <div data-aos="fade-right" className="boxes">5</div>
        </div>
    );
};

export default Animation;