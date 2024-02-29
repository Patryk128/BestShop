function makeBurger() {
    const btn = document.querySelector(".burger");
    const body = document.querySelector("body");

    btn.onclick = () => {
        body.classList.toggle("show-menu");
    }
}

makeBurger();