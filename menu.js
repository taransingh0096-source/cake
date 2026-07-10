/*=========================================
        SWEET CRUMBS MENU PAGE
              menu.js
=========================================*/

//==============================
// FILTER MENU
//==============================

const filterButtons = document.querySelectorAll(".filter-btn");
const cakeCards = document.querySelectorAll(".cake-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        cakeCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            } else {

                if (card.classList.contains(filter)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            }

        });

    });

});


//==============================
// LIVE SEARCH
//==============================

const search = document.getElementById("search");

search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    cakeCards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


//==============================
// SCROLL ANIMATION
//==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

cakeCards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition=".6s ease";

    observer.observe(card);

});


//==============================
// HOVER EFFECT
//==============================

cakeCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 25px 45px rgba(0,0,0,.18)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="0 15px 35px rgba(0,0,0,.12)";

    });

});


//==============================
// BACK TO TOP BUTTON
//==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.className = "top-button";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:linear-gradient(135deg,#ff4d88,#ff8a00);
color:#fff;
font-size:20px;
cursor:pointer;
display:none;
box-shadow:0 12px 25px rgba(0,0,0,.2);
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


//==============================
// BUTTON RIPPLE EFFECT
//==============================

document.querySelectorAll(".cake-card button").forEach(btn=>{
btn.addEventListener("click", () => {
    window.location.href = "index.html#contact";
});
});


//==============================
// HERO PARALLAX
//==============================

window.addEventListener("mousemove",(e)=>{

    const hero=document.querySelector(".hero");

    let x=(window.innerWidth/2-e.pageX)/70;
    let y=(window.innerHeight/2-e.pageY)/70;

    hero.style.backgroundPosition=`${x}px ${y}px`;

});


//==============================
// HEADER SHADOW
//==============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

    }

});


//==============================
// IMAGE ZOOM
//==============================

document.querySelectorAll(".cake-card img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.style.transform="scale(1.25)";

        setTimeout(()=>{

            img.style.transform="scale(1)";

        },500);

    });

});


//==============================
// CONSOLE MESSAGE
//==============================

console.log(`
🍰 Sweet Crumbs Menu Loaded Successfully!

Features:
✔ Live Search
✔ Category Filter
✔ Scroll Animation
✔ Back To Top Button
✔ Hover Effects
✔ Responsive Design
`);