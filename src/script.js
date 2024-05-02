const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.rating-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {

    if (e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        let temp = e.target.nextElementSibling;
        if (temp)
            selectedRating = temp.innerHTML;
        else
            selectedRating = e.target.innerHTML;
    }
    else if (e.target.classList.contains('rating')) {
        removeActive();
        e.target.classList.add('active');
        selectedRating = e.target.lastElementChild.innerHTML;
    }
    console.log(selectedRating);

})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fa fa-heart-o"  style="font-size:36px;"></i>
    <strong> Thank You! </strong>
    <br>
    <strong> FeedBack : ${selectedRating}</strong>
    <p> We'll use your feedback to improve 
    our customer support </p>`

})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}
