var drumButtons = document.querySelectorAll(".drum").length;

// detecting button press
for (var i = 0; i < drumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makesound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });

  // detecting key press
  document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
  });

  function makesound(key) {
    switch (key) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

      default:
        console.log(buttonInnerHtml);
    }
  }

  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

// // function as a parameter
// function add(num1, num2) {
//   return num1 + num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }
// // CALLING calculator FUNCTION
// calculator(4,5,add)
// calculator(4,5,multiply)

// //this is how we can call and create a class and a object
// function HouseKeeper(name , age , working , languages){  //it is a constructor func and is used to create class
//   this.name = name;
//   this.age = age;
//   this.working = working;
//   this.languages = languages;
// }
// var housekeeper1 = new HouseKeeper("timmy" , 19 , true , ["english" , "russian"] ); //this is object initialisation
// console.log(housekeeper1.name);
// console.log(housekeeper1.languages);
// console.log(housekeeper1.age);
