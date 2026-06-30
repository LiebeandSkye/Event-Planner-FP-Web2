import React, { useState } from 'react'; 
import { useAuth } from '../context/AuthContext'; 







export default function Login() { 
    const { 
        desiredName, setDesiredName, 
        email, setEmail, 
        password, setPassword, 
        confirmPassword, setConfirmPassword, 
        error, 
        handleCreateAccount, 
        handleLogin, 
    } = useAuth(); 
    const [isRegistering, setIsRegistering] = useState(false); 
    
    return ( 
        <div className='text-cyan-950'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            {!isRegistering ? (
                /* ================= LOGIN FORM ================= */
                <div>
                    <h1>Login</h1>
                    
                    <div>
                        <label>Email: </label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" 
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password" 
                        />
                    </div>
                    <button onClick={handleLogin}>Log In</button>
                    
                    <p>
                        Don't have an account?{' '}
                        <button onClick={() => setIsRegistering(true)}>Register here</button>
                    </p>
                </div>
            ) : (
                /* ================= CREATION FORM ================= */
                <div>
                    <h1>Create Account</h1>
                    <div>
                        <label>Username (Optional): </label>
                        <input 
                            type="text" 
                            value={desiredName} 
                            onChange={(e) => setDesiredName(e.target.value)} 
                            placeholder="Username" 
                        />
                        <p>If left blank, a default name will be assigned.</p>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" 
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password" 
                        />
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input 
                            type="password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            placeholder="Confirm Password" 
                        />
                    </div>
                    <button onClick={handleCreateAccount}>Create Account</button>
                    
                    <p>
                        Already have an account?{' '}
                        <button onClick={() => setIsRegistering(false)}>Log In here</button>
                    </p>
                </div>
            )}
        </div>
    )
}
