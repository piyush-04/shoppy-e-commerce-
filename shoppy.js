let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    if(ul.className == "showData"){
     document.getElementById("bar").className = "fa-solid fa-xmark";
    }
    else{
    document.getElementById("bar").className = "fa-solid fa-bars";
    }
})


//card js

let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage")
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");


crd.forEach(function(curValue){
    curValue.addEventListener("click", function(){
      itemPage.style.display="flex";
      container.style.display="none";

      let imgSrc = curValue.firstElementChild.src;
      itemImg.src = imgSrc;
    })
})