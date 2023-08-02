 var slidshowElements = document.querySelectorAll(".slider-show-element");
 let countElements = 1;

 setInterval(() =>{

   countElements ++;

     let currentElement = document.querySelector(".current");

     currentElement.classList.remove("current");

 if(countElements > slidshowElements.
     length){
     slidshowElements[0].classList.add("current");
     countElements = 1;
 }else{
     currentElement.nextElementSibling.classList.add("current");
 }
    
 },2000);



// var slaider = document.querySelectorAll(".slider-show-element");

// setInterval(()=>{
//     let currentElement = document.querySelector(".current");
//     currentElement.classList.remove("current");

//     currentElement.nextElementSibling.classList.add("current");

// },2000) 