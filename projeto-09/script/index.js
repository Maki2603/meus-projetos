document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Sempre previne o envio

        // Limpa estilos anteriores
        emailInput.style.borderColor = "";
        emailInput.style.backgroundColor = "";
        emailInput.classList.remove("input-success", "input-error");
        const erro = document.getElementById("email-erro");
        if (erro) erro.remove();

        // Validação
        let emailValido = emailInput.value.trim() !== "" && emailInput.checkValidity();

        if (!emailValido) {
            emailInput.style.borderColor = "red";
            emailInput.style.backgroundColor = "#ffeaea";
            emailInput.classList.add("input-error");
            if (!document.getElementById("email-erro")) {
                const erro = document.createElement("span");
                erro.id = "email-erro";
                erro.textContent = "Por favor, insira um e-mail válido.";
                erro.style.color = "red";
                erro.style.fontSize = "0.9em";
                erro.style.marginTop = "5px";
                emailInput.parentNode.insertBefore(erro, emailInput.nextSibling);
            }
        } else {
            emailInput.style.borderColor = "green";
            emailInput.style.backgroundColor = "#eaffea";
            emailInput.classList.add("input-success");
            const erro = document.getElementById("email-erro");
            if (erro) erro.remove();
            
            document.getElementById("selected-email").textContent = emailInput.value.trim();
            document.body.classList.add("body-classudo");
            document.getElementById("container").classList.add("container-classudo");
            document.getElementById("active-container").style.display = "none";
            document.getElementById("thanks-section").style.display = "block";
            document.getElementById("ilustrator-show").style.display = "none";
            document.getElementById("ilustrator-hidden").style.display = "none";
        }
    });

    
});




