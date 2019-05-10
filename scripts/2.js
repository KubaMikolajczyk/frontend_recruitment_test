//set all elements to variables
var modal = document.getElementById('modalContainer');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementById('closeBtn');

//listen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);

//open modal function
function openModal() {
    modal.style.display = "flex";
}

//close modal function
function closeModal() {
    modal.style.display = "none";
}