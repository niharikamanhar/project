"use strict";
let from;
document.querySelector("#button-1").addEventListener("click", function () {
  document.querySelector(".currency1").textContent = "INR";
  from = document.querySelector(".currency1").textContent;
  console.log(from);
});
document.querySelector("#button-2").addEventListener("click", function () {
  document.querySelector(".currency1").textContent = "EUR";
  from = document.querySelector(".currency1").textContent;
  console.log(from);
});
document.querySelector("#button-3").addEventListener("click", function () {
  document.querySelector(".currency1").textContent = "ILS";
  from = document.querySelector(".currency1").textContent;
  console.log(from);
});
document.querySelector("#button-4").addEventListener("click", function () {
  document.querySelector(".currency1").textContent = "KZT";
  from = document.querySelector(".currency1").textContent;
  console.log(from);
});
document.querySelector("#button-5").addEventListener("click", function () {
  document.querySelector(".currency1").textContent = "USD";
  from = document.querySelector(".currency1").textContent;
  console.log(from);
});

let to;
document.querySelector("#button-6").addEventListener("click", function () {
  document.querySelector(".currency2").textContent = "INR";
  to = document.querySelector(".currency2").textContent;
  console.log(to);
});
document.querySelector("#button-7").addEventListener("click", function () {
  document.querySelector(".currency2").textContent = "EUR";
  to = document.querySelector(".currency2").textContent;
  console.log(to);
});
document.querySelector("#button-8").addEventListener("click", function () {
  document.querySelector(".currency2").textContent = "ILS";
  to = document.querySelector(".currency2").textContent;
  console.log(to);
});
document.querySelector("#button-9").addEventListener("click", function () {
  document.querySelector(".currency2").textContent = "KZT";
  to = document.querySelector(".currency2").textContent;
  console.log(to);
});
document.querySelector("#button-10").addEventListener("click", function () {
  document.querySelector(".currency2").textContent = "USD";
  to = document.querySelector(".currency2").textContent;
  console.log(to);
});

let amount;
document.querySelector(".number").addEventListener("input", function () {
  amount = document.querySelector(".number").value;
  console.log(amount);
  return amount;
});

let data;
function getData() {
  // $(document).ready(function () {
  $.ajax({
    async: false,
    url: "https://api.exchangeratesapi.io/latest",
    type: "GET",
    success: function (result) {
      console.log(result);
      data = result.rates;
      console.log(data);
    },
    error: function (err) {
      console.log(err);
      return err;
    },
  });
  // });
  return data;
}

getData();
console.log(data);
let cur1;
let cur2;
document.querySelector(".convert").addEventListener("click", function () {
  cur2 = data[to];
  console.log(cur2);
  cur1 = data[from];
  console.log(cur1);
  let convert;
  const converter = function () {
    convert = (amount * cur2) / cur1;
    return convert;
  };

  console.log(converter());
  document.querySelector(".num").textContent = converter();
});
