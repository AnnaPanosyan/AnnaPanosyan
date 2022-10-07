
import React from "react";
import { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import Posts from './Posts';
import './App.css';


function App() {
    const [profile, setProfile] = useState(null);
    const clientId = '214212293665-9g1jh24ljqed9eik0vm3qh07sl1c545o.apps.googleusercontent.com';
    console.log(profile);

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);

    }, []);

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        //  window.localStorage.removeItem(profile)
        setProfile(null);
    };

    return (
        <div className="container" >
            {profile ? (
                <div className="posts">
                    <div className="titls">
                        <h2>React Google Login</h2>
                        <div className="logout">
                            <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                        </div>
                    </div>
                    <div>
                        <img src={profile.imageUrl} alt="user" />
                        <p>Name: {profile.name} posts</p>
                        <p>Email Address: {profile.email}</p>
                        <Posts />
                    </div>
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )
            }
        </div >
    );
}
export default App;

