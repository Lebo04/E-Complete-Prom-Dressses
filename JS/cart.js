let cart = JSON.parse(localStorage.getItem('cartItems'));

async function displayContent() {
  let data = document.querySelector("tbody");
  data.innerHTML = "";
  cart.forEach((item) => {
    data.innerHTML += `

    
    <div class="container h-100 py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-10">
  
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
            <div>
              <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                    class="fas fa-angle-down mt-1"></i></a></p>
            </div>
          </div>
  
          <div class="card rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src="${item.image}"
                    class="img-fluid rounded-3" alt="Cotton T-shirt">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <p class="lead fw-normal mb-2">${item.name}</p>
                  <p><span class="text-muted">Description: ${item.description}</span></p>
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
                  <h5 class="mb-0">R${item.price}</h5>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 class="mb-0">R${item.size}</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" class="text-danger" onclick="deleteProduct(this)><i class="fas fa-trash fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
  

  
          <div class="card">
            <div class="card-body">
              <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </section>
          `;
  });
//   document.querySelector('.checkout').innerHTML += `<div class="total">Total Amount Due: </div>`
}

displayContent();

function deleteProduct(data) {
    let id = document.querySelector("#id").value;
    let name = document.querySelector("#product").value;
    let size = document.querySelector("#size").value;
    let color = document.querySelector(".color").value;
    let price = document.querySelector("#price").value;
    let i = data.parentNode.parentNode.rowIndex;
    document.querySelector(".table").deleteRow(i);
    contents.pop({
      id,
      name,
      price,
      size,
      color,
    });
    localStorage.setItem("heels", JSON.stringify(contents));
  }

function calTotal() {
  let total = 0;
  cart.forEach((e) => {
    total += e.price * e.quantity;
  })
  document.querySelector('.total').innerHTML += `R${total}`
}
calTotal()