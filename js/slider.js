let img_data = { url: ["https://i.postimg.cc/15fYm20z/icecream-slider1.jpg",
                       "https://i.postimg.cc/cC597BWZ/icecream-slider2.jpg",
                       "https://i.postimg.cc/gcMTPmZ5/icecream-slider3.jpg"],
                 image:0
               }
               
let arrow_right= document.getElementById("arrow-right");
let arrow_left= document.getElementById("arrow-left");
let ofert_slider= document.getElementById("slider-ofert"); 
let img_slider= document.getElementById("slider-img");
let ofert = document.getElementById("slider-components"); 


window.onresize = callback_ofert_slider  
arrow_right.children[0].onclick = callback_slider_right
arrow_left.children[0].onclick = callback_slider_left

function callback_slider_right(){
  
  img_data.image = img_data.image + 1;
  if(img_data.image >= 3)
    img_data.image=0;
  if((img_data.image == 2) && (window.innerWidth > 757))
     ofert_slider.style.left = "70%";
   else
     ofert_slider.style.left = "";
  img_slider.children[0].src = img_data.url[img_data.image]; 
}

function callback_ofert_slider(){
  
  if((ofert.offsetWidth < 757) && (img_data.image == 2))
    ofert_slider.style.left = "0%";
  if((ofert.offsetWidth > 757) && (img_data.image == 2))
      ofert_slider.style.left = "70%";
}


function callback_slider_left(){
  
  img_data.image = img_data.image - 1;  
  if(img_data.image < 0)
    {img_data.image=2;}
  if((img_data.image == 2) && (window.innerWidth > 757))
    ofert_slider.style.left = "70%";
  else
    ofert_slider.style.left = "";
    img_slider.children[0].src = img_data.url[img_data.image];
}

              
      
