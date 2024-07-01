const mobileNav = document.querySelector('.mobile-menu');

const navToggle = document.querySelector('.mobile-nav-toggle')


navToggle.addEventListener('click', () => {

    const visibility = mobileNav.getAttribute("data-visible");
    const menuExpanded = navToggle.getAttribute("aria-expanded");

    console.log(visibility);
    console.log(menuExpanded);

    if (visibility === "false") {
        mobileNav.setAttribute('data-visible', true),
            navToggle.setAttribute('aria-expanded', true);

    } else if (visibility === "true") {

        mobileNav.setAttribute('data-visible', false),
            navToggle.setAttribute('aria-expanded', false);

        ;
    }









})

