"use client"
import Nav from "@/components/Nav"
import { Google } from "@mui/icons-material"
import axios from 'axios'


export default function Login(){
    
    const handleoAuth= async()=> {
        try{
            const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`)
            console.log("==> ",resp);
            if(resp){
                const authUrl = resp.data.authUrl;
                window.location.href = authUrl;
            }
        }catch(e){
            console.error("Error getting /auth/google",e)
        }
    }

    return (<>
        <Nav/>
        <h1>
            Sign In with Google
            <button onClick={handleoAuth} > <Google/> Sign in with Google</button>
        </h1>
    </>)
}