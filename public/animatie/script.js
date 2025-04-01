document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const slider = document.querySelector(".slider");
  const logo = document.querySelector(".logo");
  const headline = document.querySelector(".headline");
  const backButton = document.querySelector(".back-button");
  const slideButton = document.querySelector(".slide-button");

  // Overlay elements
  const infoOverlay = document.querySelector(".info-overlay");
  const closeButton = document.querySelector(".close-button");

  // Intro Timeline (same as before)
  const tl = new TimelineMax();

  tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(backButton, 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, "-=0.5")
    .fromTo(slideButton, 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, "-=0.5");

  // "Back to Home" button
  backButton.addEventListener("click", () => {
    window.location.href = "/";
  });

  // ---------------------------
  // BORDER REVEAL ANIMATION
  // ---------------------------
  // Create a GSAP timeline for the overlay reveal (paused initially)
  const overlayTl = new TimelineMax({ paused: true });

  // Start scale at 0.1 and opacity at 0 (already set in CSS),
  // then animate to full scale and opacity 1
  overlayTl
    .to(infoOverlay, 0.8, {
      opacity: 1,
      scale: 1,
      ease: Power2.easeInOut,
      onStart: () => {
        // Enable pointer events so we can click "Close"
        infoOverlay.style.pointerEvents = "auto";
      },
    });

  // Open the overlay on "More Info" click
  slideButton.addEventListener("click", () => {
    overlayTl.play();
  });

  // Close the overlay on "Close" click
  closeButton.addEventListener("click", () => {
    overlayTl.reverse();
    // Disable pointer events after reversing completes
    // (slight delay to ensure animation finishes)
    setTimeout(() => {
      infoOverlay.style.pointerEvents = "none";
    }, 800);
  });
});
