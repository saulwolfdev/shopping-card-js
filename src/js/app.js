const card = document.querySelector(".Shopping_Card")
const containerShopping = document.querySelector(".Shopping_Card_List")
const clearShopping = document.querySelector(".Shopping_Button")
const listCards = document.querySelector("#Contanier_Cards")

let articlesCards = [];

chargeEventListener()

function chargeEventListener() {
  listCards.addEventListener("click", addCards);
  card.addEventListener("click", deleteCards)
  
  clearShopping.addEventListener("click",clearShoppingCard)

}

function addCards(e) {
  e.preventDefault()
  if (e.target.classList.contains("Card_Button")) {
    const cardSelected = e.target.parentElement;
    readCardElementHtml(cardSelected)
  }
}

function readCardElementHtml(cardSelectRead) {

  const infoSelectCard = {
    img: cardSelectRead.querySelector(".Card_Image").src,
    title: cardSelectRead.querySelector(".Card_Title").textContent,
    price: cardSelectRead.querySelector(".Card_Price").textContent,
    id: cardSelectRead.querySelector("a").getAttribute("data-id"),
    cant:1
  }
  //verification duplicates element cards//
  const checkCardsDuplicateSelected = articlesCards.some(cardSelectRead => cardSelectRead.id === infoSelectCard.id)

  // const checkCardsDuplicateSelected = articlesCards.some((cardSelectRead) => {
  //     return cardSelectRead.id === infoSelectCard.id
  // })

  if (checkCardsDuplicateSelected) {
    const verificationDuplicatesId = articlesCards.map((cardSelectReadId) => {
      if (cardSelectReadId.id === infoSelectCard.id) {
        cardSelectReadId.cant++;
        return cardSelectReadId
      }
      else {
        return cardSelectReadId
      }
    })
    articlesCards=[...verificationDuplicatesId]
  } else {
    articlesCards = [
      ...articlesCards, infoSelectCard
    ]
  }

  console.log('articlesCards :>> ', articlesCards);

  generateShoppingCardHtml();
}

function generateShoppingCardHtml() {
  
  clearShoppingCardHtml()

  articlesCards.forEach((articleCard) => {
    const divContainer = document.createElement("div")

    const { img, title, price, id, cant } = articleCard;
    divContainer.innerHTML = `
    <div class="Shopping_Card_List_Items">
      <img src="${img}" alt="${title}"/>
     <h3>${title}</h3>
      ${price}
      ${cant}
      <a  class="Shopping_Delete" href="#" data-id="${id}">X</a>
    </div>
    `;
    containerShopping.appendChild(divContainer);
  
  })
}

function clearShoppingCardHtml() {
  // containerShopping.innerHTML = "";
  while (containerShopping.firstChild) {
    containerShopping.removeChild(containerShopping.firstChild)
  }
}

function deleteCards(e) {
  // console.log(e.target.classList.contains("Shopping_Delete"))
  if (e.target.classList.contains("Shopping_Delete")) {
    const deleteCardId = e.target.getAttribute("data-id")
    //delete por ID
    articlesCards = articlesCards.filter(articleCard => articleCard.id !== deleteCardId)
    console.log("DELETE", articlesCards);
    generateShoppingCardHtml();
  }
}

function clearShoppingCard() {
  articlesCards = [];
  clearShoppingCardHtml()
}