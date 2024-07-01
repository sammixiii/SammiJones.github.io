window.addEventListener("load", () => {

    const layoutGrid = document.querySelector(".Layout-Grid");



    layoutGrid.classList.remove("layout-grid-HIDDEN");

    Flip.from(state, {
        duration: 1.25,
        absolute: true,
        ease: "elastic.out(1,0.5)",


    })

    layoutGrid.addEventListener("transitionend", () => {

        layoutGrid.classList.remove("layout-grid-HIDDEN");

    });

});














