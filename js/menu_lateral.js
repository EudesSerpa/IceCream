let objIconList = document.getElementsByClassName("icon-list")[0];
let objClosex = document.getElementsByClassName("close-x")[0];
let objMain = document.getElementsByTagName("main")[0];

//window.addEventListener("click",closeMenuLateral,false);
objIconList.onclick = showMenuLateral;
objMain.onclick = closeMenuLateral;
window.addEventListener("resize",resizeWin,false);
//objClosex.onclick = closeMenuLateral;

function showMenuLateral() {
  
  let objHeadercomp2 = document.getElementById("header-component2");
  let objBody = document.getElementsByTagName("body")[0];
  let styleObjBody = window.getComputedStyle(objBody);
  
  objHeadercomp2.style.display = "block";
  objBody.style.overflow = "hidden";
  console.log("showMenuLateral");
}

function closeMenuLateral() {

  let objHeadercomp2 = document.getElementById("header-component2");
  let styleObjetheader = window.getComputedStyle(objHeadercomp2);
  let objBody = document.getElementsByTagName("body")[0];
  let styleObjBody = window.getComputedStyle(objBody);
  
  if( styleObjBody.overflow == "hidden"){
  
    objHeadercomp2.style.display = "none";
    objBody.style.overflow = "visible";
    console.log("closeMenuLateral");
  }
}

function resizeWin(event) {

  let objHeadercomp2 = document.getElementById("header-component2");
  let styleObjetheader = window.getComputedStyle(objHeadercomp2);

  
  if( (styleObjetheader.display == "none") && (window.innerWidth > 756) ){
    objHeadercomp2.style.display = "block";
    console.log("resizeWin1");
  }
  else{
    objHeadercomp2.style.display = "none";
    console.log("resizeWin2");
  }
}

