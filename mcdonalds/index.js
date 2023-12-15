let checkbox1 = document.getElementById("bigMac");
let checkbox2 = document.getElementById("iceCoffee");
let checkbox3 = document.getElementById("eggMuff");
let checkbox4 = document.getElementById("Sausage");
let checkbox5 = document.getElementById("spcy");

let loadingAnimation = document.getElementById("loading");
let orderid = document.getElementById("orderid");

let food1 = document.getElementById("mac");
let food2 = document.getElementById("coffee");
let food3 = document.getElementById("egg");
let food4 = document.getElementById("burrito");
let food5 = document.getElementById("Spicy");

let grid = document.getElementById("jsgrid");
grid.style.display = "none";

function orderFood() {
  if (
    checkbox1.checked ||
    checkbox2.checked ||
    checkbox3.checked ||
    checkbox4.checked ||
    checkbox5.checked
  ) {
    loading();
    let orderPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, Math.floor(Math.random() * 5000) + 2000);
    });

    orderPromise.then(() => {
      orderDone();
      display();
    });
  } else {
    alert("Must order at least 1 item!");
  }
}

function display() {
  food1.style.display = "none";
  food2.style.display = "none";
  food3.style.display = "none";
  food4.style.display = "none";
  food5.style.display = "none";

  if (checkbox1.checked) {
    food1.style.display = "block";
  }
  if (checkbox2.checked) {
    food2.style.display = "block";
  }
  if (checkbox3.checked) {
    food3.style.display = "block";
  }
  if (checkbox4.checked) {
    food4.style.display = "block";
  }
  if (checkbox5.checked) {
    food5.style.display = "block";
  }

  let order = "OrderID : " + Math.floor(Math.random() * 1000);
  orderid.textContent = order;
}

let shells = document.getElementsByClassName("shell");
shells.style.padding = "auto";

// shells[i].style.display = "flex";

function loading() {
  loadingAnimation.style.display = "block";
  loadingAnimation.style.display = "flex";
  grid.style.display = "none";
}

function orderDone() {
  loadingAnimation.style.display = "none";
  grid.style.display = "block";
  grid.style.display = "grid";
  
}
