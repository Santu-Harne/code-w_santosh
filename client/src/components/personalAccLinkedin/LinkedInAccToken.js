import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'


function LinkedInAccToken(props) {
    const [accessToken, setAccessToken] = useState(null)
    const navigate = useNavigate()
    const params = useParams()

    const accToken = useCallback(async () => {
        try {
            await axios.post(`https://www.linkedin.com/oauth/v2/accessToken?client_id=86lgzg6lwebek8&client_secret=D8Z1y05TRIDqA6La&grant_type=authorization_code&redirect_uri=http://localhost:3000/socialLogin/linkedin&code=${params.code}`)
                .then(res => {
                    console.log(res.data.access_token);
                    setAccessToken(res.data.access_token)
                    // navigate(`/AccountInfoLinkedin/${res.data.access_token}`)
                }).catch(err => console.log())
        } catch (error) {
            console.log(error.message);
        }
        try {
            await axios.get("https://api.linkedin.com/v2/me", {
                headers: {
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    'Access-Control-Allow-Origin': '*',
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${accessToken}`,
                    'Access-Control-Allow-Origin': "*",
                    'Access-Control-Allow-Methods': "GET,POST,PUT,PATCH"
                },
                proxy: {
                    host: `172.18.208.1`,
                    port: 3000
                }
            }).then(response => console.log(response.message))
                .catch(err => console.log(err.message))
        } catch (error) {
            console.log(error.message)
        }

    })
    useEffect(() => {
        accToken()
    }, [params.code])
    return (
        <>
            <h3>{accessToken}</h3>
        </>
    )
}

export default LinkedInAccToken