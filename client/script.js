todoForm.title.addEventListener("keyup", (e) => validateField(e.target));
todoForm.title.addEventListener("blur", (e) => validateField(e.target));
todoForm.description.addEventListener("input", (e) => validateField(e.target));
todoForm.description.addEventListener("blur", (e) => validateField(e.target));
todoForm.dueDate.addEventListener("input", (e) => validateField(e.target));
todoForm.dueDate.addEventListener("blur", (e) => validateField(e.target));

todoForm.addEventListener("submit", onSubmit);

let titleValid = true;
let descriptionValid = true;
let dueDateValid = true;

const api = new Api("http://localhost:5000/tasks");

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
            }
            break;
        }
        case "dueDate":{
            if(value.length == 0){
                dueDateValid = false;
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

    if(titleValid && descriptionValid && dueDateValid){
        console.log("Submit");
        saveTask();
    }

    function saveTask(){
        const task = {
            title: todoForm.title.value, 
            description: todoForm.description.value,
            dueDate: todoForm.dueDate.value,
            completed: false
        };

        api.create(task).then((task) => {
            if(task){
                render()
            }
        });
        
    }
}

function render(){
    console.log("rendering");
}