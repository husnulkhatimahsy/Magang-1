const navToggler = document.querySelector(".dashboard__navToggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".dashboard__topNav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
} 