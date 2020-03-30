import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import TimePicker from 'react-bootstrap-time-picker'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ENDPOINT_MEETINGS, ENDPOINT_ROOMS } from './../../api/endpoints'
const cardimg =
  "https://cdn.dribbble.com/users/103909/screenshots/3690077/sensors-03.jpg";

function RegisterMeeting(props) {


  const [room, setRoom] = useState('')
  const [title, setTitle] = useState('')
  const [startDate, setStartDate] = useState(new Date());

  //Horário
  const [startHour, setStartHour] = useState(new Date(0, 0, 0, 1));
  const [endHour, setEndHour] = useState(new Date(null));
  let firstHour = ('0' + startHour.getHours()).slice(-2) + ":" + ('0' + startHour.getMinutes()).slice(-2);
  let secondHour = ('0' + endHour.getHours()).slice(-2) + ":" + ('0' + endHour.getMinutes()).slice(-2)
  //Data
  let dateJson = ('0' + startDate.getDate().toFixed()).slice(-2) + '/' + ("0" + (startDate.getMonth() + 1)).slice(-2) + "/" + startDate.getFullYear()

  //Sala
  let dateAux = '';
  const [roomList, setRoomList] = useState([])
  const getRooms = async () => {

    if (dateAux != dateJson) {
      let response = await fetch(ENDPOINT_ROOMS + "?date=" + dateJson);
      let data = await response.json();
      setRoomList(data)
      dateAux = dateJson
    }

  };
  //

  const postMeeting = async () => {

    if (dateJson === '' || firstHour === '' || secondHour === '' || room == '0' || title == '') {
      alert('Preencha todos os campos!')
      return
    }

    if (parseInt(firstHour.replace(":", "")) > parseInt(secondHour.replace(":", ""))) {
      alert('O horário final não pode ser maior que o horário inicial!')
      return
    }

    let response = await fetch(ENDPOINT_MEETINGS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: dateJson,
        endTime: secondHour,
        host: "Eder Junior",
        room: room,
        startTime: firstHour,
        status: "AVAILABLE",
        title: title
      })
    });

    alert('Cadastrado com Sucesso');

  };
  //TODO FAZER VALIDAÇÃO PARA QUANDO NÃO TIVER SALAS DISPONÍVEIS
  useEffect(() => {
    getRooms()
  }, [startDate]);


  const test = () => {
    alert(dateJson);
  }





  return (
    <div id="background">
      <div id="card-filter">
        <div id="img-left">
          <img alt="card-img" draggable="false" id="card-img" src={cardimg} />
        </div>
        <div id="info-right">
          <h1>Nova reunião</h1>
          <h2>Defina seus parâmetros abaixo...</h2>

          <form method="POST">
            {/* <TimePicker class="inputs" start="00:00" end="24:00" step={30} /> */}
            <h3>Título:</h3>
            <input class="inputs" type="text" onChange={event => setTitle(event.target.value)} />

            <h3>Dia:</h3>
            {/* <input class="inputs" type="date" placeholder="Data" onChange={event => setDate(event.target.value)} /> */}
            <DatePicker selected={startDate} locale="pt-BR" onChange={date => setStartDate(date)} minDate={new Date()} locale="pt-BR" dateFormat="dd/MM/yyyy" />

            {/* TODO CHAMAR OS HORÁRIOS ATRAVÉS DAS SALAS */}
            <h3>Sala:</h3>
            <select class="inputs" onChange={event => setRoom(event.target.value)}>
              <option id="0" value="" selected>
                Selecione a Sala
              </option>
              {roomList.map((item, idx) => {
                return (
                  item.hours.length != 0 ?
                    <option>{item.numberRoom}</option> : null
                )
              })}
            </select>

            <div id="hour-title">
              <h3>Horário Incial</h3> <h3>Horário Final</h3>
            </div>
            <div id="hour-filter">
              <DatePicker
                selected={startHour}
                onChange={date1 => setStartHour(date1)}
                showTimeSelect
                showTimeSelectOnly
                locale="pt-BR"
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
              <DatePicker
                selected={endHour}
                onChange={date2 => setEndHour(date2)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                placeholderText="dasdasdas"
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
         
           <Link id="btn-router-component-filter" to="/home">
            <input
              onClick={() => postMeeting()}
              class="inputs"
              type="button"
              value="Agendar"
              draggable="false"
              id="btnFilter"
            />
          </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterMeeting;
