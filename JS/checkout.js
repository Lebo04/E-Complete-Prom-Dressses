let cart = JSON.parse(localStorage.getItem("cart"));

async function displayContent() {
  let data = document.querySelector(".cartItems");
  cart.forEach((item) => {
    data.innerHTML += `<p><a href="#">${item.name}</a> <span class="price">R${item.price}</span></p>
  
    <hr>
  `;
  });
    document.querySelector(
      ".outs"
    ).innerHTML += `<p class="total">Total <span class="total" style="color:black"><b></b></span></p>`;
}

displayContent();

function calTotal() {
  let total = 0;
  cart.forEach((e) => {
    total += e.price * e.quantity;
  });
  document.querySelector(".total").innerHTML += `R${total}`;
}
calTotal();
