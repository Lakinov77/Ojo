
var test = document.createElement("div");
var container = document.getElementById("card");
var template = document.querySelector("[data-template]");
var new_todo =document.getElementById("new_todo");

container.appendChild(test)

new_todo.addEventListener("keypress", event =>{
    if(event.key == "Enter"){
        if(new_todo.value != ""){
            var card = template.content.cloneNode(true).children[0];
            var text = card.querySelector("[data-text]");
    
            text.textContent = new_todo.value;
            test.appendChild(card);

        }
    }
})
    

var eliminar = () =>{
    card.children.remove()
}