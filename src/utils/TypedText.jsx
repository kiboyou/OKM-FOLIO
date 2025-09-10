// src/components/TypedText.jsx
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import useLanguage from '../context/useLanguage.js';

const TypedText = () => {
    const typedElement = useRef(null);
    const typedInstance = useRef(null);

    const { t } = useLanguage();

    useEffect(() => {
        if (typedInstance.current) {
            typedInstance.current.destroy();
        }
        typedInstance.current = new Typed(typedElement.current, {
            strings: t.typed,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });
        return () => typedInstance.current && typedInstance.current.destroy();
    }, [t]);

    return (
        <p>
            <span ref={typedElement} />
        </p>
    );
};

export default TypedText;
