(function () {
  const BASE_URL = "https://jsonplaceholder.typicode.com/users";

  main();

  function main() {
    let req = new XMLHttpRequest();
    req.open("GET", BASE_URL, true);
    req.send();
    req.addEventListener("load", proccessXhr);
    req.addEventListener("error", () => console.log("Reqeust failed"));
    req.addEventListener("progress", (event) =>
      console.log(`Received ${event.loaded} bytes`)
    );
  }

  function proccessXhr() {
    if (this.status !== 200) {
      console.log(`Error: Status ${this.status}`);
    } else {
      const data = JSON.parse(this.responseText);
      displayTable(data);
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
