import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './views/layout/Navbar';
import HomePage from './views/HomePage';
import DetailsPage from './views/DetailsPage';
import Footer from './views/layout/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/coins/:coinId' element={<DetailsPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;