// import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const btn = document.getElementById('btn-led');
let ledStatus = 'ON';
const socket = io();

btn.addEventListener('click', () => {
  if(ledStatus === 'ON') {
    btn.classList.add('btn-off');
    btn.classList.remove('btn-on');
    ledStatus = 'OFF';
  } else {
    btn.classList.add('btn-on');
    btn.classList.remove('btn-off');
    ledStatus = 'ON';
  }
  socket.emit('led', ledStatus);
  btn.innerHTML = ledStatus;
});