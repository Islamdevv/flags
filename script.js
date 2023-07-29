let list = document.querySelector(".container");
let inp = document.querySelector("input");
// let API = "https://restcountries.com/v3.1/all";

function getAPI(API) {
  fetch(`https://restcountries.com/v3.1/${API}`)
    .then((data) => data.json())
    .then((unp) => {
      render(unp);
    });
}
getAPI("all");

function render(data) {
  list.innerHTML = "";
  data.forEach((el) => {
    list.innerHTML += `<div class="div">
                                <img src=${el.flags.png} alt="img" clas="img"/>
                                <h2>${el.name.common}</h2>
                                <h2>${el.capital}</h2>
                                <h2>${el.population}</h2>
                                <h2>${el.region}</h2>
                            </div>`;
  });
}

inp.addEventListener("input", (e) => {
  getAPI(`name/${e.target.value}`);
});
