// Scroll Progress

window.addEventListener("scroll",()=>{

let scroll=

document.documentElement.scrollTop;

let height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

let percent=

(scroll/height)*100;

document.getElementById("progressBar").style.width=

percent+"%";

});

// Mobile Menu

const menu=document.getElementById("menuBtn");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

if(nav.style.display==="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";

nav.style.flexDirection="column";

nav.style.position="absolute";

nav.style.top="75px";

nav.style.left="0";

nav.style.width="100%";

nav.style.background="#111";

nav.style.padding="30px";

}

};

/* Reveal Animation */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".about,.skills,.journey-preview").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition=".8s";

observer.observe(section);

});

/* ================= ACTIVE NAVBAR ================= */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*================ TIMELINE ANIMATION ================*/

const timelineItems=document.querySelectorAll(".timeline-item");

const timelineObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

timelineItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s";

timelineObserver.observe(item);

});

/*================ SEASON CARDS ================*/

const seasons=document.querySelectorAll(".season-card");

seasons.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

/*================ BEYOND ANIMATION ================*/

const beyondCards=document.querySelectorAll(".beyond-card");

beyondCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/*================ PROJECT CARD ANIMATION ================*/

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.2});

projectCards.forEach(card=>projectObserver.observe(card));

/*================ TECH CARD ANIMATION ================*/

const techCards = document.querySelectorAll(".tech-card");

techCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/*================ MOVIE CARDS ================*/

const movieCards = document.querySelectorAll(".movie-card");

const movieObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.15});

movieCards.forEach(card=>movieObserver.observe(card));

/*================ WATCH CARDS ================*/

const watchCards = document.querySelectorAll(".watch-card");

watchCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateX(12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateX(0)";

});

});