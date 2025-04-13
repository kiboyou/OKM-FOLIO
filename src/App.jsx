import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./Pages/Landing.jsx";
import ScrollToTopButton from "./utils/ScrollToTopButton.jsx";
import RealisationsPage from "./Pages/RealisationsPage.jsx";
import RealisationDetail from "./Pages/RealisationDetail.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/realisations" element={<RealisationsPage/>} />
                <Route path="/realisations/:id" element={<RealisationDetail/>} />
            </Routes>
            <ScrollToTopButton />
        </Router>
    );
}

export default App;