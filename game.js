var restart = document.querySelector("#b")

var squares = document.querySelectorAll("td")

restart.addEventListener("click", function(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
})

function changeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  } else if (this.textContent === 'X'){
    this.textContent = 'O';
  } else if (this.textContent === 'O'){
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker)
}
