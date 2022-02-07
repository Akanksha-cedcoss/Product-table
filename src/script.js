products = [];
function isValidateForm(id, name, price) {
  errors = [];
  if (!id) {
    errors.push(alert("Id field is empty."));
  }
  if (!name) {
    errors.push(alert("Name field is empty."));
  }
  if (!price) {
    errors.push(alert("Price field is empty."));
  }

  return errors;
}
function submitForm() {
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  if (isValidateForm(id, name, price).length == 0) {
    if (NotduplicateId(id)) {
      p = {
        id: id,
        name: name,
        price: price,
      };
      products.push(p);
      display(p);
    }
    
  }
}
function NotduplicateId(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      alert("Product with this id is already in database");
      return false;
    }
  }
  return true;
}
function display(object) {
  var table = document.getElementById("table");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = object.id;
  cell2.innerHTML = object.name;
  cell3.innerHTML = object.price;
}
