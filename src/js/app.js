

const card = document.querySelector(".Shopping_Card")
const containerShopping = document.querySelector(".Shopping_Card_List")
const clearShopping = document.querySelector(".Shopping_Button")

const listCards = document.querySelector(".Card_Button")

chargeEventListener()
function chargeEventListener() {
  listCards.addEventListener("click",addCourses)
}

function addCourses(e) {
  e.preventDefault()
  if (e.target.classList.contains("Card_Button")) {
    const cardSelected = e.target.parentElement;
    console.log("se agrego al carrito")
    console.log(cardSelected)
     
    readCardElementHtml(cardSelected)
  }
}

function readCardElementHtml(card) {
  console.log(card)
}