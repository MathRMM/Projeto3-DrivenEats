let idMain;
let idDrink;
let idDessert;

let dishMain;
let dishDrink;
let dishDessert;

let total

const main = [{
    id: 0,
    image: "https://img.cybercook.com.br/receitas/664/hamburguer-de-linguica-1.jpeg",
    title: "Hambúruer de frango grelhado",
    description: "Pão, hambúruer de franco, queijo, salada e 200g de batata frita",
    price: "28.80",
  },
  {
    id: 1,
    image: "https://www.sabornamesa.com.br/media/k2/items/cache/73d7edd1405081e5433c41d9ad2ee18c_XL.jpg",
    title: " Bife à Parmegiana",
    description: "Filé mignon empanado com molho de tomate e queijo, arroz 200g e salada ",
    price: "37.50",
  },
  {
    id: 2,
    image: "https://espetinhodesucesso.com.br/wp-content/uploads/2022/02/Quais-os-melhores-Acompanhamentos-para-carne-de-panela.jpg",
    title: "Carne de Panela",
    description: "Filé mignon picado, batata, tomate, cebolinha e arroz 200g",
    price: "34.80",
  },
  {
    id: 3,
    image: "https://morixe.com.ar/files/recetas/thumbs/pizzamorixe000002.jpg",
    title: "Pizza 4 queijos",
    description: "Mussarela, parmesão, catupiry, peperoni e azeitona",
    price: "34.80",
  },
];

const drink = [{
    id: 0,
    image: "https://imagens-cdn.canalrural.com.br/2018/06/1436903506062.jpg",
    title: "Suco de laraja 700ml",
    description: "Laranja fresca da fazenda do seu Mendes, uma delicia!!",
    price: "8,00",
  },
  {
    id: 1,
    image: "https://www.igorgreffsushiman.com.br/wp-content/uploads/2021/12/refri.png",
    title: "Refrigerante lata 350ml",
    description: "Coca-Cola, Guarana Antartida, Fanta laranja e uva",
    price: "5.50",
  },
  {
    id: 2,
    image: "https://static.wixstatic.com/media/d1ec68_f25b7aa45975461ab54850187bce1a66.jpg/v1/fill/w_768,h_278,al_c,lg_1,q_80,enc_auto/d1ec68_f25b7aa45975461ab54850187bce1a66.jpg",
    title: " Refrigerante 2L",
    description: "Coca-Cola, Guarana Antartida, Fanta laranja e uva",
    price: "11.50",
  },
];

const dessert = [{
    id: 0,
    image: "https://elle.com.br/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yOTIyMjI4OC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcxNzA3NTAwOX0.rWK4kObfCxFa9ylyg9Akl4j7RrXkxhGha6wseeqHwL4/image.jpg?width=640&quality=80",
    title: "Pavê",
    description: "Ovo, leite, leite condensado, leite, chocolate, amêndoas.",
    price: "18.00",
  },
  {
    id: 1,
    image: "https://cozinhalucrativa.com/wp-content/uploads/2018/04/torta-limao-super-facil-rapida-simples-melhores-receitas-de-sobremesas-rapidas-gostosa-740x493.jpg",
    title: "Torta de limão",
    description: "Bolacha maisena, leite condensado, limão, ovo. ",
    price: "13.50",
  },
  {
    id: 2,
    image: "https://tartanero.com.br/site/wp-content/uploads/2021/03/bolos-24-700x466.jpg",
    title: "Bolo KitKat",
    description: "Bolo com borda de kitkat e cobrtura com creme de chocolate e M&Ms",
    price: "120.00",
  },
];
/* ----------------------------------------------------------------------------Implementar cardápio--------------------------------------------- */
function menu() {
  main.map((dish) => {
    document.querySelector(".main .options").innerHTML += `
    <div id=${dish.id} class="dish" onClick = selectMain(this)>
    <div><img src="${dish.image}" alt=""></div>
    <div> <h2>${dish.title}</h2></div>
    <div><p>${dish.description}</p></div>
        <div class="price">
            <R1>R$${dish.price}</R1>
        </div>
        <div class="check">
          <ion-icon name="checkmark-circle"></ion-icon>
        </div>
    </div>
    `;
  });

  drink.map((dish) => {
    document.querySelector(".drink .options").innerHTML += `
    <div id=${dish.id}  class="dish" onClick = selectDrink(this)>
    <div><img src="${dish.image}" alt=""></div>
    <div> <h2>${dish.title}</h2></div>
    <div><p>${dish.description}</p></div>
        <div class="price">
            <R1>R$${dish.price}</R1>
        </div>
        <div class="check">
          <ion-icon name="checkmark-circle"></ion-icon>
        </div>
    </div>
    `;
  });

  dessert.map((dish) => {
    document.querySelector(".dessert .options").innerHTML += `
    <div  id=${dish.id} class="dish" onClick = selectDessert(this)>
        <div><img src="${dish.image}" alt=""></div>
        <div> <h2>${dish.title}</h2></div>
        <div><p>${dish.description}</p></div>
            <div class="price">
                <R1>R$${dish.price}</R1>
            </div>
            <div class="check">
              <ion-icon name="checkmark-circle"></ion-icon>
            </div>
    </div>
    `;
  });
}
/* --------------------------------------------------------------------------Seleção dos Pratos--------------------------------------------------------------- */
function selectMain(element) {
  const selectItem = document.querySelector(".main .dish.select");
  if (selectItem !== null) {
    selectItem.classList.remove("select");
  }
  element.classList.add("select");
  idMain = element.id;
  activeButton();
}

function selectDrink(element) {
  const selectItem = document.querySelector(".drink .dish.select");
  if (selectItem !== null) {
    selectItem.classList.remove("select");
  }
  element.classList.add("select");
  idDrink = element.id;
  activeButton();
}

function selectDessert(element) {
  const selectItem = document.querySelector(".dessert .dish.select");
  if (selectItem !== null) {
    selectItem.classList.remove("select");
  }
  element.classList.add("select");
  idDessert = element.id;
  activeButton();
}
/* ------------------------------------------------------------------------ Ativar Botão----------------------------------------------------------------------------- */
function activeButton() {
  if (idMain != undefined) {
    if (idDrink != undefined) {
      if (idDessert != undefined) {
        const button = document.querySelector("footer button");
        button.classList.add("active");
        button.innerHTML = "Fechar Pedido";
      }
    }
  }
}
/* ------------------------------------------------------------------------- Soma dos produtos-------------------------------------------------------------------- */
function sum() {
  let mainPrice;
  let drinkPrice;
  let dessertPrice;
  if (idMain != undefined) {
    if (idDrink != undefined) {
      if (idDessert != undefined) {
        main.map((dish) => {
          if (dish.id == idMain) {
            mainPrice = Number(dish.price);
            dishMain = dish.title;
            console.log(mainPrice);
          }
        });
        drink.map((dish) => {
          if (dish.id == idDrink) {
            drinkPrice = Number(dish.price);
            dishDrink = dish.title;
            console.log(drinkPrice);
          }
        });
        dessert.map((dish) => {
          if (dish.id == idDessert) {
            dessertPrice = Number(dish.price);
            dishDessert = dish.title;
            console.log(dessertPrice);
          }
        });
         total = (mainPrice+drinkPrice+dessertPrice).toFixed(2);
    
        console.log(total)
        confirmRequest(mainPrice, drinkPrice, dessertPrice,total);
      }
    }
  }
}
/* ---------------------------------------------------Confirmar Pedido------------------------------- */
function confirmRequest(mainPrice, drinkPrice, dessertPrice,total) {
  const overview = document.querySelector(".overview");
  overview.classList.remove("hidden");
  overview.innerHTML = `
            <div class="confirm">
                <div class="top">
                    <h1>Confirme seu pedido</h1>
                </div>
                    <div class="main">
                        <div class="dish">${dishMain}</div>
                        <div class="price">R$${mainPrice}</div>
                    </div>
                    <div class="drink">
                        <div class="dish">${dishDrink}</div>
                        <div class="price">R$${drinkPrice}</div>
                    </div>
                    <div class="dessert">
                        <div class="dish">${dishDessert}</div>
                        <div class="price">R$${dessertPrice}</div>
                    </div>
                    <div class="total">
                        <div style="font-weight: 700;" >Total</div>
                        <div class="price" style="font-weight: 700;">R$${total}</div>
                    </div>
                <button class="request" onclick = pushRequest()>Tudo certo, pode pedir!</button>
                <button onclick = cancel()>Cancelar</button>
            </div>
`;
}
/* ---------------------------------------Enviar ou cancelar pedido--------------------------------------- */
function cancel(){
  document.querySelector(".overview").classList.add("hidden")
}

function pushRequest(){
  const nameUser = prompt("Qual o seu nome?")
  const address = prompt("Qual o seu endereço?")

  const description = `Olá, gostaria de fazer o pedido:\n- Prato: ${dishMain}\n- Bebida: ${dishDrink}\n- Sobrmesa: ${dishDessert}\n- Total: R$${total}\n -Nome: ${nameUser}\n -Endereço: ${address}`

  const whatsapp = `https://wa.me/5512777777777?text=${encodeURIComponent(description)}`;
  window.open(whatsapp)
}
/* -------------------Start---------- */
menu();