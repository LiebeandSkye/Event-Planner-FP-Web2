import React, { useState } from 'react'; 
import { useAuth } from '../context/AuthContext'; 







export default function Profile() { 
    const { 
        user, 
        error, 
        handleSignout, 
        handleEditAccount, 
        handleDeleteAccount, 
    } = useAuth(); 
    const [newUsername, setNewUsername] = useState(user.username); 
    const [newBio, setNewBio] = useState(user.bio); 
    const [newProfileUrl, setNewProfileUrl] = useState(user.profile_url); 
    const [newBannerUrl, setNewBannerUrl] = useState(user.banner_url); 
    const [success, setSuccess] = useState(''); 
    
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        setSuccess(''); 
        const updatedFields = { 
            username: newUsername, 
            bio: newBio, 
            profile_url: newProfileUrl, 
            banner_url: newBannerUrl 
        }
        handleEditAccount(updatedFields); 
        setSuccess('Profile Updated!'); 
    }
    
    return ( 
        <div>
            <h2>Edit Account Settings</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            
            <div>
                <p><strong>Account ID:</strong> {user.public_id}</p>
                <p><strong>Email:</strong> {user.email} <em>(Email cannot be changed)</em></p>
            </div>
            <hr />
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        placeholder="Enter username"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        id="bio"
                        value={newBio}
                        onChange={(e) => setNewBio(e.target.value)}
                        placeholder="Tell us about yourself..."
                        rows="4"
                    />
                </div>
                <div>
                    <label htmlFor="profileUrl">Profile Image URL:</label>
                    <input
                        id="profileUrl"
                        type="text"
                        value={newProfileUrl}
                        onChange={(e) => setNewProfileUrl(e.target.value)}
                        placeholder="https://example.com/avatar.png"
                    />
                </div>
                <div>
                    <label htmlFor="bannerUrl">Banner Image URL:</label>
                    <input
                        id="bannerUrl"
                        type="text"
                        value={newBannerUrl}
                        onChange={(e) => setNewBannerUrl(e.target.value)}
                        placeholder="https://example.com/banner.png"
                    />
                </div>
                
                <div style={{ marginTop: '15px' }}>
                    <button type="submit">Save Changes</button>
                </div>
            </form>
            <button onClick={handleSignout}>Sign Out</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
        </div>
    )
}