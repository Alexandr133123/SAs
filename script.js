let keys = document.querySelectorAll(".key"),
    note = document.querySelector(".nowplaying"),
    hints = document.querySelectorAll(".hints"),
    game= false,
    arrkeys={key:[65,87,83,69,68,70,84,71,89,72,85,74,75,79,76,80,186]},
    arrnotes = { note:["A", "W", "S","E","D","F","T","G","Y","H","U","J","K","O","L","P",";"]};
    rand=0;
      life=2;
function playNote(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);


  

  key.classList.add("playing");
  if(game==false){
    let keyNote = key.getAttribute("data-note");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
setTimeout(pustota,6000);
  }else{
keyNote = key.getAttribute("data-note");
  audio.currentTime = 0;
  audio.play();
  if(keyNote==arrnotes.note[rand]){
    
    note.innerHTML = "Harow";
    

   setTimeout(greenB(key), 1000);
    setTimeout(randomSymbol, 1000);
     
    }else{
       
      if(life==0){
         note.innerHTML = "Game Over";
         life=2;
        game=false;
        setTimeout(pustota,3000);
      }else{
          key2 = document.querySelector(`.key[data-key="${arrkeys.key[rand]}"]`);
        note.innerHTML = "Proigral";
      life=life-1;
      setTimeout(RedB(key), 1000);
      setTimeout(greenB(key2), 1000);
      setTimeout(randomSymbol, 1000);
      }
    }


  }

}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);


function gametrue() {
  game=true;
 randomSymbol();

}
function randomSymbol(){
   rand = Math.floor(Math.random() * arrnotes.note.length);
      note.innerHTML = arrnotes.note[rand];
}

function pustota(){
  note.innerHTML = "";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo(a) {
  console.log('Taking a break...');
  await sleep(1000);
  console.log('One second later');
  a.style.borderColor="black";
}


function greenB(a){
	
a.style.borderColor="green";
demo(a);
}




function RedB(a){
a.style.borderColor="red";
demo(a);
}