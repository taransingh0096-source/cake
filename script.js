/*=========================================
        SWEET CRUMBS BAKERY
              script.js
=========================================*/

//============================
// MOBILE MENU
//============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuBtn.innerHTML = nav.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

//============================
// CLOSE MENU AFTER CLICK
//============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

//============================
// STICKY HEADER
//============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 80);

});

//============================
// ACTIVE NAVIGATION
//============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 180;
        const height = section.offsetHeight;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

//============================
// SMOOTH SCROLL BUTTONS
//============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

//============================
// HERO BUTTONS
//============================

const exploreBtn = document.querySelector(".btn2");

if (exploreBtn) {

    exploreBtn.onclick = () => {

        document.querySelector("#cakes").scrollIntoView({

            behavior: "smooth"

        });

    };

}

const orderBtn = document.querySelector(".btn");

if (orderBtn) {

    orderBtn.onclick = () => {

        document.querySelector("#contact").scrollIntoView({

            behavior: "smooth"

        });

    };

}

//============================
// SCROLL REVEAL ANIMATION
//============================

const revealItems = document.querySelectorAll(

".about, .cake-card, .gallery img, .chef, .review-card, .contact"

);

function reveal() {

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(70px)";
    item.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);
reveal();

//============================
// HERO COUNTER
//============================



//============================
// FLOATING CAKE
//============================


//============================
// GALLERY EFFECT
//============================

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("mouseover", () => {

        img.style.filter = "brightness(1.1)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.filter = "brightness(1)";

    });

});

//============================
// REVIEW CARD EFFECT
//============================

document.querySelectorAll(".review-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});

//============================
// RIPPLE BUTTON EFFECT
//============================

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function(e) {

        const circle = document.createElement("span");

        const diameter =
            Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width =
        circle.style.height =
        `${diameter}px`;

        circle.style.left =
        `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top =
        `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) ripple.remove();

        this.appendChild(circle);

    });

});

//============================
// BACK TO TOP BUTTON
//============================

const topBtn = document.createElement("div");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `

position:fixed;
right:25px;
bottom:25px;
width:55px;
height:55px;
background:#ff4d88;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
cursor:pointer;
font-size:22px;
box-shadow:0 10px 25px rgba(0,0,0,.25);
opacity:0;
transition:.4s;
z-index:999;

`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.opacity = "1";

    } else {

        topBtn.style.opacity = "0";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

//============================
// LOADER
//============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

//============================
// PARALLAX EFFECT
//============================

window.addEventListener("scroll", () => {

    let value = window.scrollY;

    const floating = document.querySelectorAll(".floating");

    floating.forEach((item, index) => {

        item.style.transform =
        `translateY(${value * (0.05 + index * 0.02)}px)`;

    });

});

//============================
// CONSOLE MESSAGE
//============================

console.log(`
🍰 Sweet Crumbs Bakery Website Loaded Successfully!

Designed using:
✔ HTML5
✔ CSS3
✔ JavaScript

Happy Coding ❤️
`);