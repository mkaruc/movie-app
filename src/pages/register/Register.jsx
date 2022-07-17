import {useState} from 'react'
import {auth} from '../../auth/firebase'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from '../../context/AuthContext'

function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className='center'>
      <div className='auth'>
        <h1>Register</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={register} name='registration_form'>
          <input 
            type='email' 
            value={email}
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password} 
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

            <input 
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}/>

          <button type='submit'>Register</button>
        </form>
        <span>
          Already have an account?  
          <Link to='/login'>login</Link>
          <button> <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=794701318518-ghdf7ei90dj1j9lq9ltf3agcpesuvp2p.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Freact-movie-app-36e7c.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDmeMAHL7y53W0IG_-QNn7Ms5V82rh5kan6EGxhVaVGAfyjHODTqUnSxXle_tY23p_Pk28Tel_kYOtrVgDpew3aTuESnDevhFhA5mgiWPSX2utB_XRjAZGvvFZSkNmEXbXSdMrKjjs0iomyUZzo8n3a9xjA3eyHyF0dxGYG5qb5ScSeLeRnqhtlsCXqL4X7N2AMR0Wbh9UdhwzZo0A46Y4jblmSfV1YXzAETdQeJANVj3EENPhzrD3Ilzpm1XKWrjh-N5gScAeQ8MCXk_g-KjJDbtzXaeeCbg37symVA41kVIo7WCa8Q4uqKQqrjJtvt8knv_wSi1qp0Qu7BwQ&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile&context_uri=http%3A%2F%2Flocalhost%3A3000&flowName=GeneralOAuthFlow">Login with Google</a></button>
        </span>
      </div>
    </div>
  )
}

export default Register