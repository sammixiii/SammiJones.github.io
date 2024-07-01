// Home Page Launch Animations//


const layoutGrid = document.querySelector(".Layout-Grid")

const homePage = document.querySelector(".home");
const projectsPage = document.querySelector(".projects-body");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const div5 = document.querySelector(".div5");
const div6 = document.querySelector(".div6");




const tl2 = new TimelineMax({
    defaults: { ease: "Power2.easeInOut", duration: 2.5 },
});







tl2.fromTo([homePage], 7, { opacity: "0" }, { opacity: "100" });



//gsap.from(['.div1', '.div2'], { duration: 1, height: '0dvh', ease: 'Power2,easeInOut', stagger: 1, });











