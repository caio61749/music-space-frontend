import React from "react";
import "./style.css";
import CardMeeting from "../cardMeeting";

const CardBox = props => {
  return (
    <div id="card-box">
      <CardMeeting
        title={props.title}
        description={props.description}
        host={props.host}
        date={props.date}
        startTime={props.startTime}
        endTime={props.endTime}
        room={props.room}
      />
    </div>
  );
};

export default CardBox;
