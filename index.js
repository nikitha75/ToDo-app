function toDoClick() {
    const mainInput = document.querySelector(".input")
    const task = mainInput.value;
    if (!task) {
        alert("Please enter a task!");
        return;
    }
    const item = document.createElement('div');
    item.classList.add("item");

    const item_input = document.createElement('input');
    item_input.classList.add("item_input");
    item_input.value = task;
    item_input.type = "text";
    item_input.readOnly = true;
    item.appendChild(item_input);

    mainInput.value = "";

    const container = document.querySelector(".container");
    container.appendChild(item);

    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add("deleteButton");
    deleteBtn.textContent = "DELETE";
    item.appendChild(deleteBtn);
    deleteBtn.style.cssFloat = "right";

    const editBtn = document.createElement('span');
    editBtn.classList.add("editButton");
    editBtn.textContent = "EDIT";
    item.appendChild(editBtn);
    editBtn.style.cssFloat = "right";

    editBtn.addEventListener("click", () => {
        if (editBtn.textContent.toLowerCase() == "edit") {
            editBtn.textContent = "SAVE";
            item_input.readOnly = false;
        }
        else {
            editBtn.textContent = "EDIT";
            item_input.readOnly = true;
        }
    });

    deleteBtn.addEventListener("click", () => {
        item.remove();
    });
}

const addBtn = document.querySelector(".addButton");
addBtn.addEventListener("click", toDoClick);


function toDoEnter(event) {
    if (event.keyCode === 13) {    // event.key === "Enter"
        const mainInput = document.querySelector(".input")
        const task = mainInput.value;
        if (!task) {
            alert("Please enter a task!");
            return;
        }
        const item = document.createElement('div');
        item.classList.add("item");

        const item_input = document.createElement('input');
        item_input.classList.add("item_input");
        item_input.value = task;
        item_input.type = "text";
        item_input.readOnly = true;
        item.appendChild(item_input);

        mainInput.value = "";

        const container = document.querySelector(".container");
        container.appendChild(item);

        const deleteBtn = document.createElement('span');
        deleteBtn.classList.add("deleteButton");
        deleteBtn.textContent = "DELETE";
        item.appendChild(deleteBtn);
        deleteBtn.style.cssFloat = "right";

        const editBtn = document.createElement('span');
        editBtn.classList.add("editButton");
        editBtn.textContent = "EDIT";
        item.appendChild(editBtn);
        editBtn.style.cssFloat = "right";

        editBtn.addEventListener("click", () => {
            if (editBtn.textContent.toLowerCase() == "edit") {
                editBtn.textContent = "SAVE";
                item_input.readOnly = false;
            }
            else {
                editBtn.textContent = "EDIT";
                item_input.readOnly = true;
            }
        });

        deleteBtn.addEventListener("click", () => {
            item.remove();
        });
    }
}

const taskInput = document.querySelector(".input");
taskInput.addEventListener("keypress", toDoEnter);
