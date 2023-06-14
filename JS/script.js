let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});

//========================== MOCK PRODUCTS =====================//

let dresses = [
  {
    id: 1,
    name: "Up Mermaid",
    description: "Formal Evening Matric Ball Dress.",
    color: ["Blue", "Red", "Purple"],
    size: ["XS", "S", "M", "L", "XL"],
    price: 1500,
    image: "https://i.postimg.cc/KYF6rD7S/170416220818-12688577-3.jpg",
  },
  {
    id: 2,
    name: "Evening Dress",
    description: "Evening Matric Ball Dress.",
    color: ["Black", "Red", "Blue"],
    size: ["XS", "S", "M"],
    price: 1300,
    image: "https://i.postimg.cc/ryYDMdf5/61404h-mint-pc.jpg",
  },
  {
    id: 3,
    name: "V Neck Tulle",
    description: "A-line V Neck Tulle Matric Ball Dress Applique.",
    color: ["Pink", "Blue", "White"],
    size: ["S", "M", "L"],
    price: 1900,
    image: "https://i.postimg.cc/pTRsWcXc/matric-dress-za-01506.jpg",
  },
  {
    id: 4,
    name: "Ball Gown",
    description: "Ball Gown Evening Dress.",
    color: ["Cream", "Black", "Blue"],
    size: ["S", "M", "L"],
    price: 2000,
    image: "https://i.postimg.cc/wjszLMc8/89026-137.jpg",
  },
  {
    id: 5,
    name: "Off Shoulder",
    description: "Off Shoulder Lace Up Back Party matric Ball Dress.",
    color: ["Dark Blue", "Red", "Purple"],
    size: ["XS", "S", "M"],
    price: 2500,
    image: "https://i.postimg.cc/PfgnhTnS/915452-130312191927-2963.jpg",
  },
  {
    id: 6,
    name: "Sweetheart Tulle",
    description: "Burugndy Sweetheart Tulle Matric Ball Dress.",
    color: ["Maroon", "Navy", "Black"],
    size: ["XS", "S", "M"],
    price: 2500,
    image: "https://i.postimg.cc/ZKs307js/matric-dress-za-00670.jpg",
  },
  {
    id: 7,
    name: "Ball Gown",
    description: "Ball Gown Off Shoulder Sweep Train Satin Matric Dress.",
    color: ["Black", "Red", "Blue"],
    size: ["S", "M", "L"],
    price: 3000,
    image: "https://i.postimg.cc/ZR1b1NLc/matric-dress-383.jpg",
  },
  {
    id: 8,
    name: "Ball Gown",
    description: "Ball Gown Off Shoulder Organza Matric Dress Appliques.",
    color: ["Blue", "Pink", "Cream"],
    size: ["XS", "S", "M"],
    price: 2500,
    image: "https://i.postimg.cc/xdBcL84W/matric-dress-za-01443.jpg",
  },
];

localStorage.setItem("dresses", JSON.stringify(dresses));
let dressList = JSON.parse(localStorage.getItem("dresses"));

//================ ALL PRODUCTS ==================//

async function display() {
  let data = document.querySelector(".dresses");
  data.innerHTML = "";
  dressList.forEach((dress) => {
    data.innerHTML += `
      <div class="col-md-4 g-3">
      <div class="card data" >
        <img
          src="${dress.image}"
          width=""
          height="500"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title" style="overflow-y: hidden;">${dress.name}</h5>
          
            <div class="color-picker d-flex gap-2 py-2 ps-1">
            <label class="main">
            <input class="checkbox1" type="checkbox" name="color" value="${
              dress.color[0]
            }">
            <span class="w3docs" style="background:${dress.color[0]}"></span>
          </label>
          <label class="main">
            <input class="checkbox2" type="checkbox" name="color" value="${
              dress.color[1]
            }">
            <span class="w3docs" style="background:${dress.color[1]}"></span>
          </label>
          <label class="main">
            <input class="checkbox3" type="checkbox" name="color" value="${
              dress.color[2]
            }">
            <span class="w3docs" style="background:${dress.color[2]}"></span>
          </label>
            </div>
          <div class="size-picker d-flex gap-2 py-2 ps-1" style="overflow-y: hidden;">
          
          <select id="sizeSelect" class="form-select" aria-label="Default select example" style="width:6vw">
            <option selected>Size</option>
            <option value="${dress.size[0]}">${dress.size[0]}</option>
            <option value="${dress.size[1]}">${dress.size[1]}</option>
            <option value="${dress.size[2]}">${dress.size[2]}</option>
          </select>
        </div>
        <div id="selected-colors"></div>
          <p class="price">R${dress.price}</p>
          <button class="btn" id="${
            dress.id
          }" style="background-color:crimson" onclick="setValue(${dress.id});"
            ><a class="nav-link" href="./product.html">View Dress</a></button
          >
          <button class="btn carts" style="background-color:crimson" id="${
            dress.id
          }" onclick="addToCart(${dressList.indexOf(dress)})"
            ><i class="fa-solid fa-cart-shopping"></i></button
          >
        </div>
        </div>
        </div>
              `;
  });
}

display();

function saveSize(x) {
  var sizeSelect = document.querySelector("#sizeSelect");
  var selectedSize = sizeSelect.value;
  localStorage.setItem("selectedSize", selectedSize);
  alert("Size saved successfully!");
}

function loadSize() {
  var sizeSelect = document.querySelector("#sizeSelect");
  var selectedSize = localStorage.getItem("selectedSize");
  if (selectedSize) {
    sizeSelect.value = selectedSize;
  }
}

window.onload = function () {
  loadSize();
};

const colorCheckboxes = document.querySelectorAll('input[name="color"]');
const selectedColorsContainer = document.getElementById("selected-colors");

colorCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    const color = this.value;
    if (this.checked) {
      addColor(color);
    } else {
      removeColor(color);
    }
  });
});

function addColor(color) {
  const colorBox = document.createElement("span");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  selectedColorsContainer.appendChild(colorBox);
}

function removeColor(color) {
  const colorBoxes = selectedColorsContainer.querySelectorAll(".color-box");
  colorBoxes.forEach(function (colorBox) {
    if (colorBox.style.backgroundColor === color) {
      colorBox.parentNode.removeChild(colorBox);
    }
  });
}

//================= SINGLE PRODUCT ======================//

function setValue(id) {
  sessionStorage.setItem("value", id);
  displaySingle();
}
let itemId = sessionStorage.getItem("value") - 1;

let checkbox1Value;
let checkbox2Value;
let checkbox3Value;
let CheckValue1;

function checkBoxes() {
  let checkbox1 = document.querySelector(".checkbox1");
  let checkbox2 = document.querySelector(".checkbox2");
  let checkbox3 = document.querySelector(".checkbox3");
  CheckValue1 = document.querySelector(".checkbox1").value;
  checkbox1Value = checkbox1.checked;
  checkbox2Value = checkbox2.checked;
  checkbox3Value = checkbox3.checked;

  console.log("Checkbox 1:", CheckValue1);
  console.log("Checkbox 1:", checkbox1Value);
  console.log("Checkbox 2:", checkbox2Value);
  console.log("Checkbox 3:", checkbox3Value);
}

async function displaySingle() {
  console.log("Checkbox 1:", CheckValue1);
  let data = document.querySelector(".dresser");
  let itemId = sessionStorage.getItem("value") - 1;
  data.innerHTML += `
  <div class="singleItem">
  <img
          src="${dressList[itemId].image}"
          width="450"
          height="550"
        />

        <div style="margin-left: 2rem; margin-top:2rem">
        <h5 style="overflow-y:hidden; color:white;">${dressList[itemId].name}</h5>
           <p style="color:white;">${dressList[itemId].description}</p>
           <div class="color-picker d-flex gap-2 py-2 ps-1">
            <label class="main">
            <input class="checkbox1" type="checkbox" name="color" value="${dressList[itemId].color[0]}">
            <span class="w3docs" style="background:${dressList[itemId].color[0]}"></span>
          </label>
          <label class="main">
            <input class="checkbox2" type="checkbox" name="color" value="${dressList[itemId].color[1]}">
            <span class="w3docs" style="background:${dressList[itemId].color[1]}"></span>
          </label>
          <label class="main">
            <input class="checkbox3" type="checkbox" name="color" value="${dressList[itemId].color[2]}">
            <span class="w3docs" style="background:${dressList[itemId].color[2]}"></span>
          </label>
            </div>
          <div class="size-picker d-flex gap-2 py-2 ps-1" style="overflow-y: hidden;">
          
          <select id="sizeSelect" class="form-select" aria-label="Default select example" style="width:6vw">
            <option selected>Size</option>
            <option value="${dressList[itemId].size[0]}">${dressList[itemId].size[0]}</option>
            <option value="${dressList[itemId].size[1]}">${dressList[itemId].size[1]}</option>
            <option value="${dressList[itemId].size[2]}">${dressList[itemId].size[2]}</option>
          </select>
     </div>
     <p style="color:white;">R${dressList[itemId].price}</p>
           <button class="btn cart" id="${dressList[itemId].id}" style="background-color:crimson" onclick="addToCart(${dressList[itemId].id})"
           ><i class="fa-solid fa-cart-shopping"></i></button
           >
        </div>
  </div>
  `;
}
displaySingle();

//================== HOME PAGE PRODUCTS ====================//

async function slide() {
  let data = document.querySelector(".slider");
  dressList.forEach((dress) => {
    data.innerHTML += `

      <div class='items' style="background-image:url(${dress.image}); background-size: cover; background-position: center; width: 33.33vw; height:60vh; position:relative;">
      <button class="btn carts" id="${dress.id}" onclick="addToCart(${dress.id})"
      style="display: flex; position:absolute; right:1rem; top:1rem; background-color:crimson;"
      ><i class="fa-solid fa-cart-shopping"></i></button
    >
    <h5 class="card-title" style="position:absolute; bottom:2.5rem; left:1rem; color: white; overflow-y:hidden">${dress.name}</h5>
    <p class="price" style="position:absolute; bottom:0rem; left:1rem; color: white"
    >R${dress.price}</p>
    <button class="btn view" id="${dress.id}" style="background-color:crimson;" onclick="setValue(${dress.id});"
            ><a class="nav-link" href="./HTML/product.html">View Dress</a></button
          >
      </div>
              `;
  });
  for (let i = 0; i < 3; i++) {
    data.innerHTML += `
      <div class='items' style="background-image:url(${dressList[i].image}); background-size: cover; background-position: center; width: 33.33vw; height:60vh; position:relative">
      <button class="btn carts" id="${dressList[i].id}" onclick="addToCart(${dressList[i].id})"
      style="display: flex; position:absolute; right:1rem; top:1rem; background-color:crimson;"
            ><i class="fa-solid fa-cart-shopping"></i></button
          >
          <h5 class="card-title" style="position:absolute; bottom:2.5rem; left:1rem; color: white; overflow-y:hidden">${dressList[i].name}</h5>
          <p class="price" style="position:absolute; bottom:0rem; left:1rem; color: white"
    >R${dressList[i].price}</p>
    <button class="btn" id="${dressList[i].id}" style="background-color:crimson; display: flex; position:absolute; right:1rem; bottom:1rem;" onclick="setValue(${dressList[i].id});"
            ><a class="nav-link" href="./HTML/product.html">View Dress</a></button
          >
      </div>

              `;
  }
}

slide();

let data = document.querySelector(".slide");

data.addEventListener("mouseover", (e) => {
  data.id = "slidestop";
});
data.addEventListener("mouseout", (e) => {
  data.id = "slidego";
});

//======================== Filtering a Product ===============================//

function filtered() {
  let dress = document.querySelector(".items");
  let item = document.querySelector(".dresses");
  console.log("HI");
  try {
    if (!dress.value.length) throw "Enter a dress name";
    dressList = dressList.filter((items) => {
      return items.name.toLowerCase().includes(dress.value.toLowerCase());
    });
    if (!dressList.length) throw "This dress is not yet available";
    display();
  } catch (data) {
    item.innerHTML = data;
    console.log(data);
  }
}

//=========================== CART CODE ================================//

function addToCart(x) {
  // var colorSelect = document.querySelector("#colorSelect");
  // var selectedColor = colorSelect.value;

  // localStorage.setItem("color", JSON.stringify(selectedColor));

  // var sizeSelect = document.querySelector("#sizeSelect");
  // var selectedSize = sizeSelect.value;

  // localStorage.setItem("size", JSON.stringify(selectedSize));

  if (cart.includes(dressList[x])) {
    cart[cart.indexOf(dressList[x])].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    dressList[x].quantity = 1;
    cart.push(dressList[x]);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Dress added to cart");
  }
}

//========================= SORT ===============================//

function sortByName() {
  dressList.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
  display();
}

function sortByPrice() {
  dressList.sort();
  dressList.sort((a, b) => {
    return a.price - b.price;
  });
  if (!dressList.asc) {
    dressList.reverse();
  }
  dressList.asc = !dressList.asc;
  display();
}
