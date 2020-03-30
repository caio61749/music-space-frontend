import React, { useState ,useEffect} from "react";
import "./style.css";
import { Router, Switch, Route } from "react-router";
import { Link } from "react-router-dom";
//import HomeScreen from "./screens/home";
import HomeScreen from "./../../screens/home";
import { history } from "./../../history";
import CardMenu from "./../../components/cardMenu";

function LoginForm(props) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [usersAll, setUsersAll] = useState([]);

  const ENDPOINT = "http://demo5371910.mockable.io/GetLogin";

  const getApi = async () => {
    let response = await fetch(ENDPOINT);
    //{ method: "POST", body: "id:1" });
    let data = await response.json();
    setUsersAll(data);
    //setIdentifier(data);
    
  };

  useEffect(() => {
    getApi();
    console.log(getApi);
  }, []);
  
  const singin = async () => {
    var nick = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var passwordinput = document.getElementById("password");
    var nickinput = document.getElementById("user");
    
    {usersAll.map((item , idx) => {
      
        if(item.nick==nick&&item.password==password){
          alert("Bem-Vindo "+item.name+" !!!");
          window.location.replace("home?user="+item.name);
          //CardMenu.user="aaaa";
          //<Route component={HomeScreen} exact path="/home" />
        }else{
          //passwordinput.style = "background-color:#F18080;"
          //nickinput.style = "background-color:#F18080;"
        }
        
    })}
  };
  

  return (
    
    <div id="LoginScreen">
      <div id="background-login" />
      <form id="login-form" method="post">
        <h1>Music Space</h1>
        <input
          id="user"
          type="text"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
          placeholder="Usuário"
        />

        <input
          id="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="Senha"
        />

        <p>Esqueceu sua senha?</p>
        
          <input
            type="button"
            value="Acessar"
            draggable="false"
            id="btnEntrar"
            onClick={singin}
          />
        
      </form>
    </div>
  );
}
/*
<Link id="btn-router-component" to="/home">
          <input
            type="button"
            value="Acessar"
            draggable="false"
            id="btnEntrar"
            onClick={singin}
          />
        </Link>
*/
export default LoginForm;
