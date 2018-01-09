var tic = `<svg class="value tic" height="24" viewBox="0 0 28 28" width="24" xmlns="http://www.w3.org/2000/svg">
<circle id="Oval" class="st0" cx="15" cy="15" r="10"/>
</svg>`;

var toe = `<svg class="value toe" height="24" viewBox="0 0 28 28" width="24" xmlns="http://www.w3.org/2000/svg">
<path id="Triangle" class="st1" d="M15,25L25,5H5L15,25z"/>
</svg>`; 

var box1 = document.querySelector('.row-1 .box-1');
var box2 = document.querySelector('.row-1 .box-2');
var box3 = document.querySelector('.row-1 .box-3');
var box4 = document.querySelector('.row-2 .box-1');
var box5 = document.querySelector('.row-2 .box-2');
var box6 = document.querySelector('.row-2 .box-3');
var box7 = document.querySelector('.row-3 .box-1');
var box8 = document.querySelector('.row-3 .box-2');
var box9 = document.querySelector('.row-3 .box-3');

var counter = 0;
function myFunction(event) { 
  if (event.target.innerHTML){
    return;
  }
  
  if (counter % 2 === 0) {
      event.target.innerHTML = tic;
      event.target.setAttribute('data-type', 'tic');
  } else {
      event.target.innerHTML = toe;
      event.target.setAttribute('data-type', 'toe');
  }
  
  counter = counter + 1;
  
  checkTic();
  checkToe();
}
  
function checkTic() {
    if (box1.getAttribute('data-type') === 'tic' && box2.getAttribute('data-type') === 'tic' && box3.getAttribute('data-type') === 'tic') {
        box1.classList.add('winner');
        box2.classList.add('winner');
        box3.classList.add('winner');
      
    } else if (box4.getAttribute('data-type') === 'tic' && box5.getAttribute('data-type') === 'tic' && box6.getAttribute('data-type') === 'tic') {
        box4.classList.add('winner');
        box5.classList.add('winner');
        box6.classList.add('winner');
      
    } else if (box7.getAttribute('data-type') === 'tic' && box8.getAttribute('data-type') === 'tic' && box9.getAttribute('data-type') === 'tic') {
        box7.classList.add('winner');
        box8.classList.add('winner');
        box9.classList.add('winner');
      
    } else if (box1.getAttribute('data-type') === 'tic' && box4.getAttribute('data-type') === 'tic' && box7.getAttribute('data-type') === 'tic') {
        box1.classList.add('winner');
        box4.classList.add('winner');
        box7.classList.add('winner');

}   else if (box2.getAttribute('data-type') === 'tic' && box5.getAttribute('data-type') === 'tic' && box8.getAttribute('data-type') === 'tic') {
        box2.classList.add('winner');
        box5.classList.add('winner');
        box8.classList.add('winner');

}   else if (box3.getAttribute('data-type') === 'tic' && box6.getAttribute('data-type') === 'tic' && box9.getAttribute('data-type') === 'tic') {
        box3.classList.add('winner');
        box6.classList.add('winner');
        box9.classList.add('winner');

}    else if (box1.getAttribute('data-type') === 'tic' && box5.getAttribute('data-type') === 'tic' && box9.getAttribute('data-type') === 'tic') {
        box1.classList.add('winner');
        box5.classList.add('winner');
        box9.classList.add('winner');

}   else if (box3.getAttribute('data-type') === 'tic' && box5.getAttribute('data-type') === 'tic' && box7.getAttribute('data-type') === 'tic') {
        box3.classList.add('winner');
        box5.classList.add('winner');
        box7.classList.add('winner');

}
}

function checkToe() {
    if (box1.getAttribute('data-type') === 'toe' && box2.getAttribute('data-type') === 'toe' && box3.getAttribute('data-type') === 'toe') {
        box1.classList.add('winner');
        box2.classList.add('winner');
        box3.classList.add('winner');
      
    } else if (box4.getAttribute('data-type') === 'toe' && box5.getAttribute('data-type') === 'toe' && box6.getAttribute('data-type') === 'toe') {
        box4.classList.add('winner');
        box5.classList.add('winner');
        box6.classList.add('winner');
      
    } else if (box7.getAttribute('data-type') === 'toe' && box8.getAttribute('data-type') === 'toe' && box9.getAttribute('data-type') === 'toe') {
        box7.classList.add('winner');
        box8.classList.add('winner');
        box9.classList.add('winner');
      
    } else if (box1.getAttribute('data-type') === 'toe' && box4.getAttribute('data-type') === 'toe' && box7.getAttribute('data-type') === 'toe') {
        box1.classList.add('winner');
        box4.classList.add('winner');
        box7.classList.add('winner');

}   else if (box2.getAttribute('data-type') === 'toe' && box5.getAttribute('data-type') === 'toe' && box8.getAttribute('data-type') === 'toe') {
        box2.classList.add('winner');
        box5.classList.add('winner');
        box8.classList.add('winner');

}   else if (box3.getAttribute('data-type') === 'toe' && box6.getAttribute('data-type') === 'toe' && box9.getAttribute('data-type') === 'toe') {
        box3.classList.add('winner');
        box6.classList.add('winner');
        box9.classList.add('winner');

}    else if (box1.getAttribute('data-type') === 'toe' && box5.getAttribute('data-type') === 'toe' && box9.getAttribute('data-type') === 'toe') {
        box1.classList.add('winner');
        box5.classList.add('winner');
        box9.classList.add('winner');

}   else if (box3.getAttribute('data-type') === 'toe' && box5.getAttribute('data-type') === 'toe' && box7.getAttribute('data-type') === 'toe') {
        box3.classList.add('winner');
        box5.classList.add('winner');
        box7.classList.add('winner');

}
}
document.getElementsByClassName('container')[0].addEventListener('click',myFunction);