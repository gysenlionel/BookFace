import React from 'react'
import '../../styles/Login.css'
import { authentification } from '../../components/Firebase/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { actionTypes } from '../../components/Reducer/Reducer'
import { useStateValue } from '../../components/StateProvider/StateProvider'

const Login = () => {
  const [sate, dispatch] = useStateValue()

  const signIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(authentification, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="login">
      <div className="login__log">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebook"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <button type="submit" onClick={signIn} className="button">
        Sign In
      </button>
    </div>
  )
}

export default Login
