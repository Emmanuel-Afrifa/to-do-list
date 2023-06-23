let inputElement = document.getElementById('activity-input');
let addButton = document.getElementById('add-button');
let entityContainer = document.getElementById('entity-container')

inputElement.addEventListener('keypress', (e) => {
    let name = e.key;
    let code = e.code;
    // let keycc = e.keyCode;

    if (name === 'Enter' && code === 'Enter'){
        addFunction();
    }
})

addButton.addEventListener('click', addFunction)

function addFunction(){

    // Creating the div element to how the new task
    let newEntity = document.createElement('div');
    newEntity.classList.add('entity');
    
    if (inputElement.value){
        console.log('boooya');
        entityContainer.appendChild(newEntity);
    }
    else {
        window.alert('Please, enter an activity');
        
    }


    //Adding the new item
    let newActivity = document.createElement('li');
    newActivity.classList.add('item');
    newActivity.innerText = `${inputElement.value}`;
    newEntity.appendChild(newActivity);

    //Adding the check button
    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class="fa fa-check"></i>`
    checkButton.classList.add('checked', 'striker');
    newEntity.appendChild(checkButton);

    // Adding the remove button
    let removeButton = document.createElement('button');
    removeButton.innerHTML = `<i class="fa fa-trash"></i>`
    removeButton.classList.add('removed');
    newEntity.appendChild(removeButton);




    // Adding functionality to the checkButton
    checkButton.addEventListener('click', function(){
        // console.log(checkButton.parentElement)
        if (checkButton.classList.contains('striker')){
            checkButton.parentElement.style.textDecoration = 'line-through';
            checkButton.classList.remove('striker');
        }
        else {
            checkButton.parentElement.style.textDecoration = 'none';
            checkButton.classList.add('striker');

        }
    })

    // Adding functionality to the remove button
    removeButton.addEventListener('click', function(){
        // console.log(e.target.parentElement, e.target)
        removeButton.parentElement.remove();
    })

    inputElement.value = '';

}
