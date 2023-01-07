const hamburgare = document.querySelector(".hamburgare")
const meny =  document.querySelector(".meny")

hamburgare.addEventListener("click", () => 
{
    hamburgare.classList.toggle("active");
    meny.classList.toggle("active");
})


document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburgare.classList.remove("active");
    meny.classList.remove("active")
}))