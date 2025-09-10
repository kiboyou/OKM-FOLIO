import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';
import Landing from "./Pages/Landing.jsx";
import RealisationDetail from "./Pages/RealisationDetail.jsx";
import RealisationsPage from "./Pages/RealisationsPage.jsx";
import ScrollToTopButton from "./utils/ScrollToTopButton.jsx";

function App() {
    return (
        <LanguageProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/realisations" element={<RealisationsPage/>} />
                    <Route path="/realisations/:id" element={<RealisationDetail/>} />
                </Routes>
                <ScrollToTopButton />
            </Router>
        </LanguageProvider>
    );
}

export default App;