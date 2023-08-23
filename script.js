//booking page
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not(.seat_occupied)");
const count = document.getElementById("count");
const amount = document.getElementById("amount");

//update count and amount
function updateCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.seat_selected ");

  const css = selectedSeats.length;

  count.innerHTML = css;
  amount.innerHTML = css * 2000;
}

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("seat_occupied")
  ) {
    e.target.classList.toggle("seat_selected");
  }

  updateCount();
});
