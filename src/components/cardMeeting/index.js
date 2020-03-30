import React from "react";
import "./style.css";

const cardimg =
  "https://cdn.dribbble.com/users/103909/screenshots/3690077/sensors-03.jpg";

function CardMeeting(props) {
  return (
    <div id="card-meeting">
      <img alt="card-img" draggable="false" id="card-img" src={cardimg} />
      <div id="meeting-info">
        <h1 id="meeting-title">{props.title}</h1>
        <h2 id="meeting-description">{props.description}</h2>
        <div id="meeting-date">
          <div id="info-date">
            <h2>
              <span>Host:</span>
              {props.host}
            </h2>
            <h2>
              <span>Data: </span>
              {props.date}
            </h2>
            <h2>
              <span>Começa às: </span>
              {props.startTime}
            </h2>
            <h2>
              <span>Termina às: </span>
              {props.endTime}
            </h2>
          </div>
          <div id="meeting-room">
            <h1>{props.room}</h1>
            <h2>Sala</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMeeting;
