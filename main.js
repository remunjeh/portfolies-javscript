//========= toggle icon navbar===========//
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar")
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active")

};


//=============scroll sections active links==============//

let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if(top >= offset && top < offset + height){;
        navLink.forEach(links => {
            links.classList.remove("active");
            document.querySector.querySector("header nav a[href*=" + id +"]").classList.add("active");
        });
    });
};

//==================sticky navbar==========*//
let header = documents.querySector("header");
header.classList.toggle("sticky", window.scrollY > 100);

//========= remove toggle icon navbar when click navbar link(scroll)===========//
menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");

}:
//===================scroll reveal====================*/
ScrollReveal({ 
    // reset: true,
    distance:"80px",
    duration:2000,
    delay:200
 });
 ScrollReveal().reveal('.home-content, heading',{origin: "top"});

 ScrollReveal().reveal('.home-img, service-container, .portfolio-box, .contact form', {origin: "bottom"});
 ScrollReveal().reveal('.home-content h1, about-img', {origin: "left"});
 ScrollReveal().reveal('.home-content p about-content', {origin: "right"});

 //===================types js====================*/
 const typed = new typed(".multiple-text", {
    strings: ["Full Stack Developer", "Cook", "YouTuber", "Dancer"],
    typespeed:100,
    backspeed:100,
    backdelay:1000,
    loop:true
 })
