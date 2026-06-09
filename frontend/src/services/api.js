const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'; 





async function request(method, path, body = null) { 
    const res = await fetch(`${BASE_URL}${path}`, { 
        method, 
        headers: { 'Content-Type': 'application/json' }, 
        body: body ? JSON.stringify(body) : null 
    })

    let data = {}; 
    try { data = await res.json() }
    catch { data = {} }

    if (!res.ok) throw new Error(data.error || `API error: ${res.status}`); 
    return data; 
}

// Example: 
// export function getHealth() { return request('GET', '/health') }
// export function getNotes() { return request('GET', '/api/notes') }
// export function createNote(payload) { return request('POST', '/api/notes', payload); }
