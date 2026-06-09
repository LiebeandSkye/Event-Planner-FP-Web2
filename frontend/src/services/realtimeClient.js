import { io } from 'socket.io-client'; 
import { getToken } from './auth'; 

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001'; 
let socket = null;





export const connectSocket = async () => { 
    if (socket?.connected) return socket; 
    const token = await getToken(); 
    socket = io(BACKEND_URL, { 
        auth: { token }, 
        withCredentials: true 
    })
    socket.on('connect', () => console.log('Socket connected:', socket.id)); 
    socket.on('disconnect', () => console.log('Socket disconnected')); 
    return socket; 
}

export const disconnectSocket = () => { 
    if (socket) { 
        socket.disconnect(); 
        socket = null; 
    }
}

export const getSocket = () => socket; 
