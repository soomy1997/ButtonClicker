const button1 = document.getElementById('btn');

// Change button text on click
button1.addEventListener('click', function handleClick() {
    button1.textContent = 'Log out';
});


// hide button on click
function hide(element){
  element.remove();
}
