(function () {
  const BASE_URLS = [
    "https://jsonplaceholder.typicode.com/users/",
    "https://jsonplaceholder.typicode.com/posts?userId=",
    "https://jsonplaceholder.typicode.com/todos?userId=",
  ];
  const SHOW_ERR = true;
  const SKIP_HEADER = "userId";
  window.addEventListener("load", init);

  function init() {
    qs(".input-container--button").addEventListener("click", searchId);
    qs(".dismiss").addEventListener("click", () => toggleError(!SHOW_ERR));
  }

  // searchs through the user id and makes requests to these apis
  // 1. https://jsonplaceholder.typicode.com/users/   { method : GET }
  // 2. https://jsonplaceholder.typicode.com/posts?userId=  { method : GET}
  // 3. https://jsonplaceholder.typicode.com/todos?userId=  {method : GET}
  async function searchId() {
    // clear previous dsiplayed contents
    qs(".display").innerHTML = "";

    let input = qs("input");
    let id = input.value;
    input.value = "";

    const urls = BASE_URLS.map((url) => url + id);
    try {
      const responses = await Promise.all(urls.map((url) => fetch(url)));

      // check the status code for each promise response
      responses.forEach((response) => {
        if (!response.ok) throw new Error();
      });

      // process data
      const [user, posts, todos] = await Promise.all(
        responses.map((res) => res.json())
      );

      displayTable([user]);
      displayTable(posts);
      displayTable(todos);
    } catch (err) {
      toggleError(SHOW_ERR);
    }
  }

  function displayTable(data) {
    let table = gen("table");
    let thead = gen("thead");
    let tbody = gen("tbody");

    // process table headers
    let headers = Object.keys(data[0]).filter((key) => key !== SKIP_HEADER);
    let ths = headers.map((key) => {
      let th = gen("th");
      th.textContent = key;
      return th;
    });
    ths.forEach((th) => thead.appendChild(th));

    // process table body and data
    for (const row of data) {
      let tr = gen("tr");
      for (const [key, value] of Object.entries(row)) {
        if (key === SKIP_HEADER) continue;
        let td = gen("td");
        td.textContent = JSON.stringify(value);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    // insert to DOM
    qs(".display").appendChild(table);
  }

  function toggleError(show) {
    let errorDiv = qs(".alert");
    if (show) {
      errorDiv.classList.remove("hidden");
    } else {
      errorDiv.classList.add("hidden");
    }
  }

  function gen(tagName) {
    return document.createElement(tagName);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }
})();
