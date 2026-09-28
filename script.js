// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
    } else {
        nav.style.boxShadow = "none";
    }
});


// =========================
// CURRENT YEAR
// =========================

const footer = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footer.textContent =
    `© ${currentYear} Mohamed El Osmani. All rights reserved.`;
