let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// Form, submit events
form.addEventListener("submit", addItem);

// delete remove
itemList.addEventListener("click", removeItem);

// Filter
filter.addEventListener("keyup", filterItems);

// Add Item
function addItem(e) {
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById("item");
    
    // Create new li element
    let li = document.createElement("li");

    // Add list
    li.className = "list-group-item";

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem.value));

    // Input value cleaning
    newItem.value = "";

    // Create delete button
    let deleteBtn = document.createElement("button");

    // Add class name
    deleteBtn.classList = "btn btn-danger btn-sm float-end delete";

    // app text node
    deleteBtn.appendChild(document.createTextNode("X"));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure you want to remove")) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter
function filterItems(e) {
    let text = e.target.value.toLowerCase();

    let items = itemList.getElementsByTagName("li");

    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}
