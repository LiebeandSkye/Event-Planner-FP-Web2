import { Routes, Route, Router } from 'react-router-dom'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import NavigationHeader from './components/NavigationHeader';





export default function App() { 
    return ( 
        <>
            <NavigationHeader />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/about" element={ <About /> } />
                <Route path='*' element={ 
                    <div className="z-50 fixed inset-0 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm text-white">
                        <div className="text-center flex flex-col items-center">
                            <h2 className="text-xl font-bold mt-4">No Page Found...</h2>
                        </div>
                    </div>
                } />
            </Routes>
        </>
    )
}