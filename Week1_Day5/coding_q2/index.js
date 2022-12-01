(function () {
  window.addEventListener("load", init);

  function init() {
    for (const deleteBtn of qsa("table button")) {
      deleteBtn.addEventListener("click", deleteRow);
    }

    qs("form button").addEventListener("click", addNewRow);
  }

  function addNewRow(e) {
    e.preventDefault();

    // create a new row with input data
    let tr = gen("tr");
    for (const input of qsa("input[type=text]")) {
      let td = gen("td");
      td.textContent = input.value;
      tr.appendChild(td);
    }

    // create delete button
    let td = gen("td");
    let deleteBtn = gen("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteRow);

    td.appendChild(deleteBtn);
    tr.appendChild(td);

    // insert table row
    qs("table tbody").appendChild(tr);
  }

  function deleteRow(e) {
    e.stopPropagation();
    let tr = e.target.closest("tr");
    tr.remove();
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
