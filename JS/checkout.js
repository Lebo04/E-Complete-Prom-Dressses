let cart = JSON.parse(localStorage.getItem("cart"));

async function displayContent() {
  let data = document.querySelector(".cartItems");
  cart.forEach((item) => {
    data.innerHTML += `<p><a href="#">${item.name}</a> <span class="price">R${item.price}</span></p>
  
    <hr>
    <p class="total">Total <span class="total" style="color:black"><b></b></span></p>`;

    // data.innerHTML += `
    //       <tr>
    //       <td style="color:white">${item.id}</td>
    //       <td style="color:white">${item.name}</td>
    //       <td style="color:white">R${item.price}</td>
    //       <td style="color:white">${item.size}</td>
    //       <td style="color:white">${item.color}</td>
    //       <td style="color:white">${item.quantity}</td>
    //       </tr>
    //       `;
  });
  //   document.querySelector(
  //     ".checkout"
  //   ).innerHTML += `<div class="total" style="color:white">Total Amount Due: </div>`;
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
