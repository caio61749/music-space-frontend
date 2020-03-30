import React from "react";
import "./style.css";

function CardMenu(props) {

// função pra ler querystring
  //var nickname=" sadas";
  function queryString (){
    let loc=window.location.search.substring(1, window.location.search.length);   
    var nickname=loc.replace("user="," ");
    return nickname;
  };



  return (
    <div id="card-menu" onLoad={queryString}>
      <h1 id="card-welcome">
        <span>Olá, </span>
        {props.user}
      </h1>
      <div id="card-menu-buttons" />
    </div>
  )
}

export default CardMenu;
