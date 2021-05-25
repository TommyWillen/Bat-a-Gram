import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

const Login = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const isInvalid = password === '' || emailAddress === "";

    useEffect(() => {
       document.title = 'Login - Bat-a-Gram'
    }, [])
    const handleLogin = () => { };
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <p>Hello login page!</p>
    </div>
  );
};

export default Login;
