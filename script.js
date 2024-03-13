const botaoAbrir = document.querySelector("header > button")
const botaoFechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector("nav.mobile")

// botaoAbrir.addEventListener("click", abrirMenu)
// botaoFechar.addEventListener("click", fecharMenu)

// function abrirMenu() {
//   body.classList.add("escurecer")
//   nav.classList.add("abrir")
// }

// function fecharMenu() {
//   body.classList.remove("escurecer")
//   nav.classList.remove("abrir")
// }

// Da pra fazer usando o toggle do classList

botaoAbrir.addEventListener("click", toggleMenu)
botaoFechar.addEventListener("click", toggleMenu)

function toggleMenu() {
  body.classList.toggle("escurecer")
  nav.classList.toggle("abrir")
}