import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

import './App.css'

// const clientId = 'GOOGLE_CLIENT_ID'
export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''

function Login() {
  const handleSuccess = async (googleResponse) => {
    const tokenId = googleResponse
    console.log('tokenId:', tokenId)
  }

  return (
    <div className="App">
      <header className="App-header">
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <GoogleLogin onSuccess={handleSuccess} />
        </GoogleOAuthProvider>
      </header>
    </div>
  )
}

export default Login
