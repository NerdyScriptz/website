const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.onkeydown = function(e) {
if(event.keyCode == 123) {
window.alert("No stealing our code!");
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
window.alert("No stealing our code!");
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
window.alert("No stealing our code!");
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
window.alert("No stealing our code!");
return false;
}
}
//Used to block inspect element with keys
