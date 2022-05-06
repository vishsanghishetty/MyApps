const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); //selects all seats not occupied
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value; //+ parses the movie ticket value into a number (alternative to parseInt)

populateUI();

//Set the movie data to local storage
const setMovieData = (selectedMovieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', selectedMovieIndex);
    localStorage.setItem('moviePrice', moviePrice);
}

//Set the seats selected data to local storage
const updateSelectedCount = () => {

    const selectedSeats = container.querySelectorAll('.row .seat.selected');

    /* to get the index of a selected seat
      1. get the selected seats into an array `selectedSeatsArray`
      2. get the seats into an array `seatsArray`
      3. use map high order array function which maps every selected seat and pass it to
         indexOf function for the seatsArray which returns the index of the selected seat*/
    const selectedSeatsArray = [...selectedSeats];
    const seatsArray = [...seats];

    const seatsIndex = selectedSeatsArray.map(seat => seatsArray.indexOf(seat));
    console.log(seatsIndex);
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex)); //sets to local storage indexes of selected seats.

    const selectedSeatsCount = selectedSeats.length;
    // console.log(selected);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
    //parsing the string back to the original array
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    //console.log(selectedSeats);

    //selectedSeats should have seats that > 0 and it should not be empty in the localStorage
    if (selectedSeats !== null && selectedSeats.length > 0) {
        //then iterate through all the seats and set the selectedSeats (selected class to the index of seat) accordingly in the UI
        seats.forEach((seat, index) => {

            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex; //set the local storage movie index in UI
    }

}

//Movie Select event
movieSelect.addEventListener('change', (e) => {

    ticketPrice = +e.target.value;
    updateSelectedCount(); //when the selected movie option changes update the selected count and the total
    setMovieData(e.target.selectedIndex, ticketPrice);

})

//click event on anything inside the container triggers the event handler
//Seat click event
container.addEventListener('click', (e) => {
    // console.log(e.target); // print the element(which is the target) on which the click event is dispatched

    if (!e.target.classList.contains('occupied') && e.target.classList.contains('seat')) {
        //toggle adds the selected class to the element if it doesn't already exist and removes it if it exists
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})

//Initial count and total set, calling updateSelectedCount() when the page loads
updateSelectedCount();