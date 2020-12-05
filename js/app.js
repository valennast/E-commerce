class Card {
    constructor(name,price,img){
        this.name = name;
        this.price = price;
        this.img = img;
        this.id = Math.random()*1000;
    }

    
}

var cards;
window.onload= () => {
    let objectFromJson = JSON.parse(dbJson);
    /* console.log(objectFromJson); */
    cards = objectFromJson.map(object =>{
        return new Card(object.name,object.price,object.imgPath)
    });
    /* console.log(cards); */

    let cardContainer = document.getElementById("foodcards");
    /* console.log(cardContainer) */
    cards.forEach(element => {
        cardContainer.innerHTML+= createCard(element);
    });
}

function createCard(card){
    return `<div class="card">
          <img src="${card.img}" class="card-img-top">
          <div id="${card.id}" class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text"> // Price ${formatoPrecio(card.price)}</p>   
            <a href="#" class="btn btn-warning" onclick="addCard(event)"><span><i class="fas fa-cart-plus "></i></span>Add to the car </a>
          </div>
          <div class="card-footer">
            <small class="text-muted"></small>
          </div>
        </div>`

}

function addCard(event){
    let counter = document.getElementById("shopcar");
    let total_purchase=document.getElementById("total_purchase");
    let currentvalue = counter.innerHTML;
    counter.innerHTML = parseInt(currentvalue) + 1;
 /*    console.log (event.target.parentNode); */
    let container = event.target.parentNode;
/*     cards.forEach(element => {
        if(container.id == element.id) console.log(element);
    }); */
    let product= cards.find(element => {
        return container.id == element.id
    });
    console.log(total_purchase.innerHTML);
    let current_total=total_purchase.innerHTML;
    total_purchase.innerHTML =parseFloat(current_total) + product.price;
    /* console.log(product); */
}

function formatoPrecio(precio){
    const formatoprecio = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
      });
      return formatoprecio.format(precio);
}