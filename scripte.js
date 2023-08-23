fetchEventData();
  function fetchEventData(){
    fetch('https://se-tasks.vercel.app/events')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    renderData(data)});

  }

  function renderData(data){
  console.log('rendering data',data);
  console.log(data[2]);

  const name= document.getElementById('event-name');
  name.innerHTML=data[2].name;

  const date =document.getElementById('date');
  date.innerHTML=data[2].date;

  const d =document.getElementById('description');
  d.innerHTML=data[2].description;

  const time =document.getElementById('time');
  time.innerHTML=data[2].time;

  const vnm=document.getElementById('mnev');
  vnm.innerHTML = data[2].venue;

  const price=document.getElementById('p');
  price.innerHTML = data[2].ticketPrice;

  const tot=document.getElementById('tTick');
  tot.innerHTML = data[2].totalTickets;

  const avail=document.getElementById('aTick');
  avail.innerHTML = data[2].availableTickets;

  const book=document.getElementById('bTick');
  book.innerHTML = data[2].bookedTickets;
  console.log(vnm);
  }