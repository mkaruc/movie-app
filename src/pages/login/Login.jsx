import { Link, useNavigate } from "react-router-dom";
import { auth, db, logInWithEmailAndPassword, logout, registerWithEmailAndPassword, sendPasswordReset, signInWithGoogle } from "../../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState,useEffect } from "react";
import {Header,LoginContainer,StyledInput,StyledButton,FormContainer,Div,StyledImg,} from './Login.style';
import Navbar from "../../components/navbar/Navbar";
import {AuthContext} from '../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  // const {currentUser} = useAuthValue()
  const navigate = useNavigate();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     currentUser?.reload()
  //     .then(() => {
  //       if(currentUser?.login){
  //         clearInterval(interval)
  //         navigate('/')
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err.message)
  //     })
  //   }, 1000)
  // }, [navigate, currentUser])
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);
  return (
    <>
    <Navbar />
    <Div>
    <StyledImg src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-movies-index-1628968089.jpg?crop=0.934xw:1.00xh;0.0337xw,0&resize=1200:*" alt />
    <LoginContainer>
      <Header>Login</Header>
      <FormContainer>
        <StyledInput
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <StyledInput
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <StyledButton
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </StyledButton>
        <StyledButton className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </StyledButton>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </FormContainer>
    </LoginContainer>
    </Div></>
  );
}
export default Login;