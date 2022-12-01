(function () {
  const URL = "https://jsonplaceholder.typicode.com/users";

  main();

  async function main() {
    try {
      let res = await fetch(URL);
      let data = await res.json();
      displayTable(data);
    } catch (err) {
      console.log(err);
    }
  }

  function displayTable(data) {
    let table = gen("table");
    let thead = gen("thead");
    let tbody = gen("tbody");

    // process table headers
    let ths = Object.keys(data[0]).map((key) => {
      let th = gen("th");
      th.textContent = key;
      return th;
    });
    ths.forEach((th) => thead.appendChild(th));

    // process table body and data
    for (const row of data) {
      let tr = gen("tr");
      for (const value of Object.values(row)) {
        let td = gen("td");
        td.textContent = JSON.stringify(value);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    // insert to DOM
    qs("body").appendChild(table);
  }

  function gen(tagName) {
    return document.createElement(tagName);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }
})();
