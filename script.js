const hamMenu=document.querySelector(".menu-toggle"),
      hamIcon=document.querySelector(".menu-toggle i"),
      menu=document.querySelector(".menu-ul");

hamMenu.addEventListener("click",()=>{
    hamIcon.classList.toggle("fa-times");
    menu.classList.toggle("active");
    
})