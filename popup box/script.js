const submitbtn=document.getElementById('submit');
const closebtn=document.getElementById('close');
const popup=document.querySelector('.pop-container');

submitbtn.addEventListener('click', function(){
    popup.classList.add('popup-active');
})

closebtn.addEventListener('click', function(){
    popup.classList.remove('popup-active');
});