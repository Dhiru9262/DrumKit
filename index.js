for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {

  document.querySelectorAll(".drum")[index].addEventListener("click", handleClick);

}



function handleClick() {
var buttonInnerHtml=this.innerHTML;
makeSound(buttonInnerHtml);
   ButtonAnnimation(buttonInnerHtml);
}

// this code is for make the sound from keyboad;
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  ButtonAnnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1= new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
  
    case "a":
      var tom2= new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
  
    case "s":
      var tom3= new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
  
    case "d":
      var tom4= new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
  
    case "j":
      var snare= new Audio("./sounds/snare.mp3");
     snare.play();
      break;
  
    case "k":
      var crash= new Audio("./sounds/crash.mp3");
      crash.play();
      break;
  
    case "l":
      var kick= new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
  
    default:
      break;
  }
}

function ButtonAnnimation(currentKey) {
  document.querySelector("."+currentKey).classList.add("press");
  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("press");
  },200);
}
