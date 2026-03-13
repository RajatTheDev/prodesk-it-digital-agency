const toggleBtn = document.getElementById("toggle-theme-toggle")
const icon = toggleBtn.querySelector("img")
const hamburger = document.getElementById("hamburger")
const navLinks = document.querySelector(".nav-links")

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    if(document.body.classList.contains("dark-theme")){
        icon.src = "icons/moon.png"
    } else {
        icon.src = "icons/sun.png"
    }
})

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
})