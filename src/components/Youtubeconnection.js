import React from 'react';
import GoogleLogin from 'react-google-login'


const Youtubeconnection = () => {

    const responseGoogle=(response)=>{
        console.log(response)
    }
    return (
        <div>
            <GoogleLogin
                authorizationUrl="https://accounts.spotify.com/authorize"
                responseType="token"
                clientId="290579800532-ie1ea80k4hul371a1cgkpibtcug7o71p.apps.googleusercontent.com"
                clientSecret="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"
                scope="https://www.googleapis.com/auth/youtube.readonly"
                redirectUri="http://localhost:3000/oauth-callback"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}

            />

        </div>
    );
};

export default Youtubeconnection;
