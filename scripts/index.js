////////////Array sin categorias repetidas////////
let categories = [];
x=''
for (let i = 0; i < data.events.length; i++) {
  if (x != data.events[i].category) {
    let obj = {};
  
    obj.id = data.events[i]._id;
    obj.img = data.events[i].image;
    obj.name = data.events[i].name;
    obj.date = data.events[i].date;
    obj.description = data.events[i].description;
    obj.cate = data.events[i].category;
    obj.place = data.events[i].place;
    obj.cap = data.events[i].capacity;
    obj.assintance = data.events[i].assistance;
    obj.price = data.events[i].price;
  
    x = obj.cate;  

    categories.push(obj);
  }    
}
// /////Crea checkbox por categorías///////////
const contenedorCategories = document.querySelector("#checkCat");

let categorie = '';

for (const cat of categories) {
  categorie += `        <form action="#">
    <input type="checkbox" name="${cat.cate}" id="${cat.cate}" />
    <label for="${cat.cate}">${cat.cate}</label>
  </form>`;
}

contenedorCategories.innerHTML = categorie;
////////////Crear cards////////////////////////
const contenedorCards = document.querySelector('#cards')

let cards = ''

 for (const card of data.events) {
  cards += `        <div class="card">
<img src="${card.image}" class="card-img-top" alt="${card.name}" />
<div class="card-body">
<h5 class="card-title">${card.name}</h5>
<p class="card-text">
  ${card.description}
</p>
<div id="fotterCard" class="container text-center">
  <div class="row">
    <div class="col-4">
      <h6>U$$ ${card.price}</h6>
    </div>
    <div class="col-8">
      <a href="./details.html" class="btn btn-primary">Ver más</a>
    </div>
  </div>
</div>
</div>
</div>`
}
contenedorCards.innerHTML = cards
