// src/hooks/useDevfolioScripts.js
import { useEffect } from 'react';
import AOS from 'aos';
import Typed from 'typed.js';
import PureCounter from '@srexi/purecounterjs';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';
import imagesLoaded from 'imagesloaded';
import 'swiper/css';

export function useDevfolioScripts() {
    useEffect(() => {
        // Ici tu colles le contenu de ton IIFE ((function() { ... })())
        // mais SANS la partie "wrapper" (pas besoin de "use strict" ni de IIFE)
        // Tu peux faire par exemple :

        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            } else {
                return document.querySelector(el);
            }
        };

        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener);
        };

        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all);
            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener));
                } else {
                    selectEl.addEventListener(type, listener);
                }
            }
        };

        // Exemple : scroll
        function toggleScrolled() {
            const body = document.body;
            const header = document.querySelector('#header');
            if (!header) return;
            if (
                !header.classList.contains('scroll-up-sticky') &&
                !header.classList.contains('sticky-top') &&
                !header.classList.contains('fixed-top')
            )
                return;
            window.scrollY > 100
                ? body.classList.add('scrolled')
                : body.classList.remove('scrolled');
        }

        document.addEventListener('scroll', toggleScrolled);
        window.addEventListener('load', toggleScrolled);

        // ➕ Les autres comportements ici...

        // Typed.js
        const selectTyped = document.querySelector('.typed');
        if (selectTyped) {
            let typed_strings = selectTyped.getAttribute('data-typed-items');
            typed_strings = typed_strings.split(',');
            new Typed('.typed', {
                strings: typed_strings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });
        }

        // Preloader
        const preloader = document.querySelector('#preloader');
        if (preloader) {
            window.addEventListener('load', () => {
                preloader.remove();
            });
        }

        // AOS
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });

        // PureCounter
        new PureCounter();

        // GLightbox
        GLightbox({ selector: '.glightbox' });

        // Swiper
        function initSwiper() {
            document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
                let config = JSON.parse(
                    swiperElement.querySelector(".swiper-config").innerHTML.trim()
                );

                new Swiper(swiperElement, config);
            });
        }
        window.addEventListener("load", initSwiper);

        // Autres effets scrollspy, isotope, etc. à rajouter

        // Nettoyage si nécessaire
        return () => {
            document.removeEventListener('scroll', toggleScrolled);
            window.removeEventListener('load', toggleScrolled);
        };
    }, []);
}
