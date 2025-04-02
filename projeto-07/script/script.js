const buttons = document.querySelectorAll(".btn");
let selectedNumber = document.querySelector("#selected-number");

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn")) {

        buttons.forEach((button) => {
            button.style.backgroundColor = "hsl(213, 19%, 18%)";
            button.style.color = "hsl(217, 12%, 63%)";
            button.classList.add("btn:hover");
        });
        const button = event.target;
        button.style.backgroundColor = "hsl(25, 97%, 53%)";
        button.style.color = "hsl(216, 12%, 8%)";
        const buttonText = button.textContent;

        selectedNumber.textContent = buttonText;
    }
    
    if (event.target.classList.contains("btn-btn-submit") ) { 

        if (selectedNumber.textContent.trim() === "") {
            alert("Por favor, selecione um número antes de enviar!");
            return;
        }
        document.querySelector(".header").style.display = "none";
        document.querySelector(".container-star").style.display = "none";
        document.querySelector(".btns").style.display = "none";
        document.querySelector(".container-btn").style.display = "none";
        document.querySelector(".hidden-container").style.display = "block";
    } 
})











