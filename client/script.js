todoForm.title.addEventListener("input", (e) => validateField(e.target));
todoForm.title.addEventListener("blur", (e) => validateField(e.target));
todoForm.description.addEventListener("input", (e) => validateField(e.target));
todoForm.description.addEventListener("blur", (e) => validateField(e.target));
todoForm.dueDate.addEventListener("input", (e) => validateField(e.target));
todoForm.dueDate.addEventListener("blur", (e) => validateField(e.target));

todoForm.addEventListener("submit", onSubmit)

let titleValid = true;
let descriptionValid = true;
let dueDateValid = true;

function validateField(field){
    const { name, value } = field;
    let validationMessage = "";
    switch(name){
        case "title":{
            if(value.length < 2){
                titleValid = false;
                validationMessage = "The field 'Title' must contain minimum of 2 characters.";
            }else if(value.length > 100){
                titleValid = false;
                validationMessage = "The field 'Title' can only contain a maximum of 100 characters.";
            }
            break;
        }
        case "description":{
            if(value.length > 500){
                descriptionValid = false;
                validationMessage = "The field 'Description' can only contain a maximum of 500 characters.";
                console.log();
            }
            break;
        }
        case "dueDate":{
            if(value.length === 0){
                descriptionValid = false;
                validationMessage = "The field 'Due Date' must use a valid Due Date.";
            }
            break;
        }
    }

    field.previousElementSibling.innerText = validationMessage;
    field.previousElementSibling.classList.remove("hidden");
}



function onSubmit(e){
    e.preventDefault();
}