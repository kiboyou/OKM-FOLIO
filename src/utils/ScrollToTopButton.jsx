import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        visible && (
            <a
                href=""
                id="scroll-top"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                }}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#006400',
                    color: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                    zIndex: 9999,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <i className="bi bi-arrow-up-short" style={{ fontSize: '24px' }}></i>
            </a>
        )
    );
};

export default ScrollToTopButton;
