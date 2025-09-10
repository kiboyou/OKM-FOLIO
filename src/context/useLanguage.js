import { useContext } from 'react';
import { LanguageContext } from './LanguageContext.jsx';

export const useLanguage = () => {
	const ctx = useContext(LanguageContext);
	if (!ctx) {
		return { lang: 'fr', toggleLang: () => {}, t: { nav: { hero: 'Accueil', about: 'À propos', cv: 'CV', portfolio: 'Portfolio', services: 'Services', contact: 'Contact' } } };
	}
	return ctx;
};

export default useLanguage;
