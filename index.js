const toggleBtn = document.getElementById("toggle-theme-toggle")
const icon = toggleBtn.querySelector("img")

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    if(document.body.classList.contains("dark-theme")){
        icon.src = "icons/moon.png"
    } else {
        icon.src = "icons/sun.png"
    }
})