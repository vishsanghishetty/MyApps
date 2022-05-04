const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); //selects all seats not occupied
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
console.log(ticketPrice);

const updateSelectedCount = () => {

    const selectedSeats = container.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    // console.log(selected);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

movieSelect.addEventListener('change', (e) => {

    ticketPrice = +e.target.value;
    updateSelectedCount();

})

//click event on anything inside the container triggers the event handler
container.addEventListener('click', (e) => {
    // console.log(e.target); // print the element(target) on which the click event is dispatched

    if (!e.target.classList.contains('occupied') && e.target.classList.contains('seat')) {
        e.target.classList.toggle('selected'); //toggle adds the selected class to the element if it doesn't already exist and removes it if it exists
        updateSelectedCount();
    }
})