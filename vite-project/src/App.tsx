import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CollectionPage from "./components/CollectionPage/CollectionPage.tsx";
import MainPage from "./components/MainPage/MainPage.tsx";
import LoginPage from "./components/LoginPage/LoginPage.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="collections" element={<CollectionPage />} />
                <Route path="home" element={<MainPage />} />
                <Route path="login" element={<LoginPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
