import React, { useState, useEffect } from "react";
import "./style.css";
import CardMenu from "../../components/cardMenu";
import CardBox from "../../components/cardBox";

const HomeScreen = props => {
  const [cardAll, setCardAll] = useState([]);

  const ENDPOINT = "https://meetingvmix.herokuapp.com/meeting";

  const getApi = async () => {
    let response = await fetch(ENDPOINT);
    //{ method: "POST", body: "id:1" });
    let data = await response.json();
    
    setCardAll(data);
  };

  useEffect(() => {
    getApi();
    console.log(getApi);
  }, []);
  
// função pra ler querystring
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
    <div id="HomeScreen"  onLoad={queryString} >
      <div id="card-menu" onLoad={queryString}>
      <h1 id="card-welcome">
        <span>Olá, </span>
        <span id="user"></span>
      </h1>
      <div id="card-menu-buttons" />
    </div>
      {cardAll.map((item, idx) => {
        return (
          <CardBox
            title={item.title}
            description={item.description}
            date={item.date}
            host={" " + item.host}
            startTime={item.startTime}
            endTime={item.endTime}
            room={item.room}
          />
        );
      })}
    </div>
  );
};

export default HomeScreen;
