let addText = document.querySelector('textarea');
let addButton = document.querySelector('button');
let todoList = document.querySelector('.todo-list');

addText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        CreateDiv();
    }
});

addButton.addEventListener('click', function (e) {
    CreateDiv();
});

todoList.addEventListener('click', function (e) {
    let n = e.target.innerHTML;
    let parentsElement = e.target.parentElement;

    if (n === 'Delete') {
        e.target.parentElement.remove();
    }
    if (n === 'Edit') {
        let divElement = parentsElement.querySelector('.text-element');
        let taskName = divElement.innerHTML;
        divElement.remove();

        let textArea = document.createElement('textarea');
        textArea.classList.add('text-area');
        parentsElement.prepend(textArea);
        textArea.value = taskName;
        textArea.setAttribute('data-name', taskName);

        parentsElement.querySelector('.del-up-button').innerHTML = 'Update';
        parentsElement.querySelector('.edit-can-button').innerHTML = 'Cancel';

        textArea.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                UpdateButton(parentsElement);
            }
        });
    }
    if (n === 'Cancel') {
        let textArea = parentsElement.querySelector('.text-area');
        let textValue = textArea.getAttribute('data-name');
        CancelUpdate(textValue);
    }
    if (n === 'Update') {
        UpdateButton(parentsElement);
    }

    if (n === 'More') {
        let textElement = parentsElement.querySelector('.text-element');
        let moreButton = parentsElement.querySelector('.showContent');
        moreButton.addEventListener('click', function (e) {
            textElement.classList.remove('more-css');
            moreButton.innerHTML = 'Less';
            console.log(moreButton.innerHTML);
        });
    }
    if (n === 'Less') {
        let textElement = parentsElement.querySelector('.text-element');
        let moreButton = parentsElement.querySelector('.showContent');
        moreButton.addEventListener('click', function (e) {
            textElement.classList.add('more-css');
            moreButton.innerHTML = 'More';
            console.log(moreButton.innerHTML);
        });
    }

    function UpdateButton(parentsElement) {
        let textArea = parentsElement.querySelector('.text-area');
        CancelUpdate(textArea.value);
    }

    function CancelUpdate(val) {
        let parentsElement = e.target.parentElement;
        let textArea = parentsElement.querySelector('.text-area');
        textArea.remove();

        let textElement = document.createElement('div');
        textElement.classList.add('text-element');
        parentsElement.prepend(textElement);
        textElement.innerHTML = val;

        parentsElement.querySelector('.del-up-button').innerHTML = 'Delete';
        parentsElement.querySelector('.edit-can-button').innerHTML = 'Edit';
    }
});

function CreateDiv() {
    if (addText.value !== '') {
        let textValue = addText.value;
        addText.value = '';

        let entityParent = document.createElement('div');
        entityParent.classList.add('todo-element');
        todoList.prepend(entityParent);

        let textElement = document.createElement('div');
        textElement.classList.add('text-element');
        textElement.classList.add('more-css');
        textElement.innerHTML = textValue;
        textElement.setAttribute('data-name', textValue);
        entityParent.appendChild(textElement);

        //window.innerWidth
        let a = window.innerWidth;
        // console.log("0.06"*a);
        if (textValue.length>=(0.06*a)){
            let expand = document.createElement('a');
            let text = document.createTextNode('More');
            expand.classList.add('showContent');
            expand.appendChild(text);
            expand.href = '#';
            entityParent.appendChild(expand);
        }

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.classList.add('del-up-button');
        entityParent.appendChild(deleteButton);

        let editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.classList.add('edit-can-button');
        entityParent.appendChild(editButton);
    } else {
        alert('Please enter some value');
    }
}