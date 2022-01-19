document.getElementById("user1").onclick = positionUser1;
document.getElementById("user2").onclick = positionUser2; 
window.addEventListener("resize",resizeClientsay,false);
 
function positionUser1() {   
  document.getElementsByClassName("slider-elements")[0].style.transform = "translate(0)";
  document.getElementsByClassName("slider-elements")[1].style.transform = "translate(0)";   
} 
 
function positionUser2() {    
  let getSliderCont =  document.getElementsByClassName("slider-container")[0]; 
  let styleSliderCont = window.getComputedStyle(getSliderCont);
  document.getElementsByClassName("slider-elements")[0].style.transform = "translate(-"+ styleSliderCont.width + ")";
  document.getElementsByClassName("slider-elements")[1].style.transform = "translate(-"+ styleSliderCont.width + ")";
  
}

function resizeClientsay() {
  let getSliderCont =  document.getElementsByClassName("slider-container")[0];
  let styleSliderCont = window.getComputedStyle(getSliderCont);
  let getUser1 = document.getElementsByClassName("slider-elements")[0];
  let styleUser1 = window.getComputedStyle(getUser1);
  let getUser2 = document.getElementsByClassName("slider-elements")[1];
  let valueTraslate = styleUser1.transform.split(",");
  
  if( +valueTraslate[4] < 0 ){
    getUser1.style.transform = "translate(-"+ styleSliderCont.width + ")";
    getUser2.style.transform = "translate(-"+ styleSliderCont.width + ")";
  } 
}
