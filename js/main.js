let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

// Form, submit events
form.addEventListener("submit", addItem);

// delete remove
itemList.addEventListener("click", removeItem);

// Add Item
function addItem(e) {
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById("item").value;

    // Create new li element
    let li = document.createElement("li");

    // Add list
    li.className = "list-group-item";

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button
    let deleteBtn = document.createElement("button");

    // Add class name
    deleteBtn.classList = "btn btn-danger btn-sm float-end delete";

    // app text node
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to remove')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}