let cart = JSON.parse(localStorage.getItem('cart'));

async function displayContent() {
  let data = document.querySelector(".container");

  cart.forEach((item) => {
    data.innerHTML += `
          <div class="card rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src="${item.image}"
                    class="img-fluid rounded-3" alt="Cotton T-shirt">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <p class="lead name fw-normal mb-2" style="font-size:1.4rem">${item.name}</p>
                  <p style="font-size:.8rem"><span class="text">Description: ${item.description}</span></p>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fas fa-minus"></i>
                  </button>
  
                  <input id="form1" min="0" name="quantity" value="1" type="number"
                    class="form-control form-control-sm" />
  
                  <button class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 class="mb-0" style="overflow-y:hidden">R${item.price}</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" class="text-danger" onclick="deleteProduct(${item.id})"><i class="fa-solid fa-trash"></i></a>
                </div>
              </div>
            </div>
          </div>
          `;
  });
  document.querySelector('.cart').innerHTML += `<div class="total" style="display: grid; place-items: center; font-size:2rem">Total Amount Due: </div>`
}

displayContent();

function deleteProduct(productId) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      cart.splice(i, 1);
      break;
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Dress removed from cart')
  location.reload()
}

function calTotal() {
  let total = 0;
  cart.forEach((e) => {
    total += e.price * e.quantity;
  })
  document.querySelector('.total').innerHTML += `R${total}`
}
calTotal()