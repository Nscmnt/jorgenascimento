const Menu = document.querySelectorAll('#top-menu a')

Menu.forEach((e) => { e.addEventListener("click", active)})
function active(){
    Menu.forEach(e => e.classList.remove("active"))
    this.classList.add("active")
}








