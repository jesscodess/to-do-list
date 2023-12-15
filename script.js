// Variables

const list = document.querySelector('.container-list');
const input = document.getElementById('#input');
const trashIcon = document.getElementById('trash');
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

// Event listeners

input.addEventListener('keydown', function (event){
    if (event.key === 'Enter'){
        addItem();
    };
});

// Functions

function addItem(){
    let divParent = document.createElement('div');
    let divChild = document.createElement('div');
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');
//
    divParent.className = 'item';
    divParent.innerHTML = '<div>'+input.value+'</div>';
//
    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener('click', function(){
        checkIcon.style.color = 'limegreen';
    });
//
    divChild.appendChild(checkIcon);
//

    localStorage.setItem('items', JSON.stringify(itemsArray));

    trashIcon.className = 'fas fa-trash';
    trashIcon.style.color = 'darkgray';
    trashIcon.addEventListener('click', function (){
        divParent.remove();
    })
//
    divChild.appendChild(trashIcon);
//
    divParent.appendChild(divChild);
//
    list.appendChild(divParent);

    input.value = '';
//
    storeItem();
};

function storeItem(){
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    addItem(input.value);
    input.value = '';
}

