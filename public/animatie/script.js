document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero');
    const slider = document.querySelector('.slider');
    const logo = document.querySelector('.logo');
    const headline = document.querySelector('.headline');
    const backButton = document.querySelector('.back-button');
    const slideButton = document.querySelector('.slide-button');
    const slidePanel = document.querySelector('.slide-panel');
    const closeButton = document.querySelector('.close-button');

    const tl = new TimelineMax();

    tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(backButton, 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, "-=0.5"); // Button animation

    // Go back to the home page when clicked
    backButton.addEventListener("click", () => {
        window.location.href = "/";
    });

    // GSAP Animation for Slide-In Panel
    const panelTl = new TimelineMax({ paused: true });
    panelTl.to(slidePanel, 0., { right: "0%", ease: Power2.easeOut });

    // Open panel when clicking slide button
    slideButton.addEventListener("click", () => {
        panelTl.play();
    });

    // Close panel when clicking close button
    closeButton.addEventListener("click", () => {
        panelTl.reverse(); // Slide it back
    });
});
