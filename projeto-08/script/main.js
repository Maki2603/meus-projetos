document.addEventListener("click", function (event) {

    if (event.target === this.querySelector("#icon-plus-1")) {
        this.querySelector("#icon-plus-1").style.display = "none";
        this.querySelector("#icon-minus-1").style.display = "block";
        this.querySelector("#oculto-1").style.display = "block";
    } else if (event.target === this.querySelector("#icon-plus-2")) {
        this.querySelector("#icon-plus-2").style.display = "none";
        this.querySelector("#icon-minus-2").style.display = "block";
        this.querySelector("#oculto-2").style.display = "block";
    } else if (event.target === this.querySelector("#icon-plus-3")) {
        this.querySelector("#icon-plus-3").style.display = "none";
        this.querySelector("#icon-minus-3").style.display = "block";
        this.querySelector("#oculto-3").style.display = "block";
    } else if (event.target === this.querySelector("#icon-plus-4")) {
        this.querySelector("#icon-plus-4").style.display = "none";
        this.querySelector("#icon-minus-4").style.display = "block";
        this.querySelector("#oculto-4").style.display = "block";
    } 
    
    if (event.target === this.querySelector("#icon-minus-1")) {
        this.querySelector("#icon-plus-1").style.display = "block";
        this.querySelector("#icon-minus-1").style.display = "none";
        this.querySelector("#oculto-1").style.display = "none";
    } else if (event.target === this.querySelector("#icon-minus-2")) {
        this.querySelector("#icon-plus-2").style.display = "block";
        this.querySelector("#icon-minus-2").style.display = "none";
        this.querySelector("#oculto-2").style.display = "none";
    } else if (event.target === this.querySelector("#icon-minus-3")) {
        this.querySelector("#icon-plus-3").style.display = "block";
        this.querySelector("#icon-minus-3").style.display = "none";
        this.querySelector("#oculto-3").style.display = "none";
    } else if (event.target === this.querySelector("#icon-minus-4")) {
        this.querySelector("#icon-plus-4").style.display = "block";
        this.querySelector("#icon-minus-4").style.display = "none";
        this.querySelector("#oculto-4").style.display = "none";
    }
})