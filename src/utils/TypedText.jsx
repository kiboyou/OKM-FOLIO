// src/components/TypedText.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
    const typedElement = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        typedInstance.current = new Typed(typedElement.current, {
            strings: [
                'Certified Associate in Python Programming - PCAP',
                'Freelancer',
                'Développeur Python',
                'Développeur web Full Stack',
                'Élève Ingénieur en Data Science'
            ],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });

        return () => {
            typedInstance.current.destroy(); // clean up
        };
    }, []);

    return (
        <p>
            <span ref={typedElement} />
        </p>
    );
};

export default TypedText;
