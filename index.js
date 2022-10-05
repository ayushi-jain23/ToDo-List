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

        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.classList.add('edit-button');
        entityParent.appendChild(editButton);
        editButton.addEventListener("click",edit);
    }
    else{
        alert("Please enter some value")
    }
});

function del(e){
    let clickedTask = e.target.parentElement;
    clickedTask.remove();
}

function edit(e){
    let parentsElement= e.target.parentElement;
    let inputContent= parentsElement.querySelector('.text-element');
    let taskName = inputContent.innerHTML;

    parentsElement.innerHTML = ''

    let newTextElement = document.createElement("input");
    newTextElement.classList.add('new-element');
    parentsElement.appendChild(newTextElement);

    let updateButton = document.createElement("button");
    updateButton.innerHTML = "Update";
    updateButton.classList.add('update-button');
    parentsElement.appendChild(updateButton);

    updateButton.addEventListener("click",function (e) {

        let addText1 = document.querySelector(".new-element");
        let textValue1 = addText1.value;
        console.log(textValue1)

        addText1.value = "";
        parentsElement.innerHTML = '';

        let textElement1 = document.createElement("div");
        textElement1.classList.add('text-element');
        textElement1.innerHTML = textValue1;
        parentsElement.appendChild(textElement1);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add('delete-button');
        parentsElement.appendChild(deleteButton);
        deleteButton.addEventListener("click",del);

        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.classList.add('edit-button');
        parentsElement.appendChild(editButton);
        editButton.addEventListener("click",edit);
    });

    let cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Cancel";
    cancelButton.classList.add('cancel-button');
    parentsElement.appendChild(cancelButton);

    cancelButton.addEventListener("click",function (e){
        parentsElement.innerHTML = "";

        let textElement = document.createElement("div");
        textElement.classList.add('text-element');
        textElement.innerHTML = taskName;
        parentsElement.appendChild(textElement);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add('delete-button');
        parentsElement.appendChild(deleteButton);
        deleteButton.addEventListener("click",del);

        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.classList.add('edit-button');
        parentsElement.appendChild(editButton);
        editButton.addEventListener("click",edit);

    });
}

// TS010691251 //