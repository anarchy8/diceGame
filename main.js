let dice1 = document.getElementById("dice-1");
let dice2 = document.getElementById("dice-2");
let dice3 = document.getElementById("dice-3");
let dice4 = document.getElementById("dice-4");
let dice5 = document.getElementById("dice-5");
let dice6 = document.getElementById("dice-6");
let rollbtn = document.getElementById("roll");
let pElemani = document.getElementById("pElement");


function randomÜret(){
  let sayi = Math.round(Math.random()*5)+1;
  
  if(sayi==1){
    pElemani.className = "bi bi-dice-1-fill";
  }
  else if(sayi==2){
    pElemani.className = "bi bi-dice-2-fill";
  }
  else if(sayi==3){
    pElemani.className = "bi bi-dice-3-fill";
  }
  else if(sayi==4){
    pElemani.className = "bi bi-dice-4-fill";
  }
  else if(sayi==5){
    pElemani.className = "bi bi-dice-5-fill";
  }
  else if(sayi==6){
    pElemani.className = "bi bi-dice-6-fill";
  }
 
}
rollbtn.onclick = randomÜret;
