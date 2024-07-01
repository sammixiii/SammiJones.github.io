gsap.registerPlugin(Flip);

/* LINE MOVE FUNCTIONALITY  

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector('.active-nav');





links.forEach(link => {

    link.addEventListener("click", (e) => {

        //* LINK COLOR CHANGE ANIMATIONS//* 

        gsap.to(links, { color: "#e2e5df" });
        if (document.activeElement === e.target) {
            gsap.to(link, { color: "#ed3326" });
        }

        //* MOVE LINE ANIMATION//* 

        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease: "elastic.out(1,0.5)",


        })







    });

});

*/






const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        //get state
        const state = Flip.getState(cards);


        // add the active clas to the clicked one and add inactive to all others 



        const isCardActive = card.classList.contains("active");
        cards.forEach((otherCard, otherIdx) => {

            otherCard.classList.remove("active");
            otherCard.classList.remove("is-inactive");

            if (!isCardActive && index !== otherIdx) {

                otherCard.classList.remove("active");
                otherCard.classList.add("is-inactive");
            }
        });

        if (!isCardActive) card.classList.add("active");


        Flip.from(state, {
            duration: 1,
            ease: "expo out",
            absolute: true,


        });



    });
});













