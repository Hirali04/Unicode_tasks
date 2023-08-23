//homepage
console.log("heloo")
const searchInput = document.getElementById("searchInput");
const eventList = document.getElementById("eventList");
searchInput.addEventListener("click", toggleEventList);
function toggleEventList() {
  eventList.classList.toggle("visible");
}
searchInput.addEventListener("input", searchE);
function searchE() {
  const searchTerm = searchInput.value.toLowerCase();
  const events = eventList.getElementsByClassName("e");

  for (const e of events) {
    const eventName = e.textContent.toLowerCase();
    if (eventName.includes(searchTerm)) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  }
}

const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');

if (bar){
  bar.addEventListener('click',() =>{
    nav.classList.add('active');
  })
}

///slideshow
var slideIndex = 1;
//showDivs(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mov");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//api
console.log("helloo")

// document.addEventListener("click", function(event){
//   if(!event.target.matches('#evebd')) return;

//   fetch('https://se-tasks.vercel.app/events')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     renderData(data)});
//   })
fetchevents();
  function fetchevents(){
    fetch('https://se-tasks.vercel.app/events')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    renderData(data)});

  }  

  function renderData(data){
  console.log('rendering data',data);
  
  const names = data.map((event) => event.name);
  console.log(names);
  const nm = document.querySelectorAll('.ne');
  nm.forEach((element,index) =>{
    element.textContent = names[index];
  })

  const venues = data.map((abc) => abc.venue);
  console.log(venues);
  const vn = document.querySelectorAll('.ve');
  vn.forEach((ele,i) =>{
    ele.textContent = venues[i];
  })

  const prices = data.map((abc) => abc.ticketPrice);
  console.log(prices);
  const tp = document.querySelectorAll('.pe');
  tp.forEach((ele,i) =>{
    ele.textContent = prices[i];
  })

}



