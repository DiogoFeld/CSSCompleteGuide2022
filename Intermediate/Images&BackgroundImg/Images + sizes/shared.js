var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var planButtons = document.querySelectorAll(".plan .button");
let mobileButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

if (modal) {
    modal.addEventListener("click", CloseModal);
}
backdrop.addEventListener("click", CloseModal);
mobileButton.addEventListener("click", OpenMobile);

for (let i = 0; planButtons.length > i; i++) {
    planButtons[i].addEventListener("click", OpenModal);
}

function OpenModal() {
    backdrop.classList.remove("close");
    backdrop.classList.add("open");

    if (modal) {
        modal.classList.remove("close");
        modal.classList.add("open");
    }
}

function CloseModal() {
    backdrop.classList.remove("open");
    backdrop.classList.add("close");
    if (modal) {
        modal.classList.remove("open");
        modal.classList.add("close");
    }
    mobileNav.classList.remove("open");
    mobileNav.classList.add("close");
}

function OpenMobile() {
    mobileNav.classList.remove("close");
    mobileNav.classList.add("open");
    backdrop.classList.remove("close");
    backdrop.classList.add("open");
}
