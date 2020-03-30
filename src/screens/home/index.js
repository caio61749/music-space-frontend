import React, { useState, useEffect } from "react";
import "./style.css";
import CardMenu from "../../components/cardMenu";
import CardBox from "../../components/cardBox";

const HomeScreen = props => {
  
  //var nickname=" sadas";
  function queryString (){
    let loc=window.location.search.substring(1, window.location.search.length);   
    var nickname=loc.replace("user="," ");
    var name = document.getElementById("user");
    //alert("Olaaaaaaaa");
    name.innerHTML = nickname;
    //card.style="background-color:#F18080;"
  };

  return (
    <div onLoad={queryString}>
    <div id="lista-do-header">
      
      <div>
        <h1 id='logo'>Olá, <span id="user">erro</span> XD</h1>
      </div>
      <div><img class="click" id="logo2" alt="dark mode"  src="https://img.icons8.com/ios-filled/50/000000/moon.png"/></div>
    </div>
    <div id="bodypag">
      <ul id="app-filter">

        <li class="filter selected" id="all">
          <h1>Todos</h1>
        </li>

        <li class="filter" id="imaginedragons" >
          <h1>Imagine Dragons</h1>
        </li>

        <li class="filter" id="aaron" >
          <h1>Aaron Smith</h1>
        </li>

        <li class="filter" id="moon" >
          <h1>Moon Taxi</h1>
        </li>
      </ul>
      <div id="divisor" />

      <div id="container">
      </div>
      <div id="container1">
      </div>
    </div>
    </div>
  );
};

export default HomeScreen;
