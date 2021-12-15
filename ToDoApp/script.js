

let form = document.querySelector(".add-form");
let list = document.querySelector(".todos");
let del = document.querySelector(".delete");
let searchInput = document.querySelector(".search input")





form.addEventListener("submit", (e) => {
    e.preventDefault();
    let todo = form.add.value.trim().toLowerCase();

    if (!todo == " ") {
        addTemplate(todo);
        form.reset()
    } else {
        alert("item not defined")
    }


})



function addTemplate(todo) {

    list.innerHTML += `</li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>
        ${todo}
      </span>
      <i class="far fa-trash-alt delete"></i>`

}

list.addEventListener("click", (e) => {
    let check = (e.target.classList.contains("delete"));
    if (check == true) {
        let doubleCheck = confirm("are u sure");
        if (doubleCheck == true) {
            e.target.parentElement.remove();
        } else {

        }


    }
})




searchInput.addEventListener("keyup", (e) => {
    const param = searchInput.value.trim().toLowerCase();

    filtred(param);
})


const filtred = (param) => {


    Array.from(list.children).filter((todo) => {


        return !todo.textContent.toLowerCase().includes(param);
    }).forEach((todo) => {
        todo.classList.add("filtered");
    });


    Array.from(list.children).filter((todo) => {


        return todo.textContent.toLowerCase().includes(param);
    }).forEach((todo) => {
        todo.classList.remove("filtered");
    });


    
}
