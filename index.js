let addText = document.querySelector("input");
let addButton = document.querySelector("button");
let todoList = document.querySelector(".todo-list")

addButton.addEventListener("click", function (e) {

    if (addText.value !== "") {
        let textValue = addText.value;
        addText.value = "";

        let entityParent = document.createElement("div");
        entityParent.classList.add('todo-element');
        todoList.appendChild(entityParent)

        let textElement = document.createElement("div");
        textElement.classList.add('text-element');
        textElement.innerHTML = textValue;
        entityParent.appendChild(textElement);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add('delete-button');
        entityParent.appendChild(deleteButton);
        deleteButton.addEventListener("click",del);

        let updateButton = document.createElement("button");
        updateButton.innerHTML = "Update";
        updateButton.classList.add('update-button');
        entityParent.appendChild(updateButton);
        updateButton.addEventListener("click",update);
    }
    else{
        alert("Please enter some value")
    }
});

function update(e){
    console.log("update")
    // let clickedTask = e.target.parentElement;
    // let a = clickedTask.querySelector("div");
    // console.log(a)
    // // a.
}

function del(e){
    let clickedTask = e.target.parentElement;
    clickedTask.remove();
}








// TS010691251 //