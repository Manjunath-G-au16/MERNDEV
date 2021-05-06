import React ,{useState} from "react";
import {useHistory} from "react-router-dom";

function Signin() {
  const history = useHistory();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState('');
  const userLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/login',{
      
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email,password}),
    })
    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credentials")
      console.log("Invalid Credentials");
    }else{
      window.alert("login successful")
      console.log("login successful");
      history.push("/")
    }

  }
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>Signin</h1>
        <form method="post">
          <input
            type="email"
            className="input"
            name="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="password"
            className="input"
            name="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="password"
          />
          <input
            type="submit"
            className="button"
            id="button"
            name="signin"
            value="Sign In"
            onClick={userLogin}
          />
        </form>
      
    </div>
  );
}

export default Signin;
