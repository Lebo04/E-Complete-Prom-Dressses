let cart = JSON.parse(localStorage.getItem("cart"));
let dress = JSON.parse(localStorage.getItem('dresses'));

async function displayContent() {
  let data = document.querySelector(".cartItems");
  cart.forEach((item) => {
    data.innerHTML += `<p><a href="#">${item.name}</a> <span class="price">R${item.price}</span></p>
  
    <hr>
  `;
  });
    document.querySelector(
      ".outs"
    ).innerHTML += ` <p>Shipping fee R100</p>
    <p class="total">Total <span class="total" style="color:black"><b></b></span></p>`;
}

displayContent();

function calTotal() {
  let total = 0;
  cart.forEach((e) => {
    total += (e.price * e.quantity) + 100;
  });
  document.querySelector(".total").innerHTML += `R${total}`;
}
calTotal();

function calPrice() {
  let total = 0;
  
    total += dress.price * dress.quantity;

  document.querySelector(".price").innerHTML += `R${total}`;
}
calPrice();
