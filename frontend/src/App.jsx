import { Routes, Route } from 'react-router-dom'; 





export default function App() { 
    return ( 
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/lobby" element={<h1>Lobby</h1>} />
        </Routes>
    )
}