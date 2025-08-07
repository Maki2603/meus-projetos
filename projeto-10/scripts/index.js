document.addEventListener("click", function (event) {
    if (event.target === this.querySelector("#menu")) {
        this.querySelector("#menu").style.display = "none";
        this.querySelector("#side-menu").style.display = "block";
        this.querySelector("#overlay").style.display = "block";
    } else if (event.target === this.querySelector(".close-menu")) {
        this.querySelector("#side-menu").style.display = "none";
        this.querySelector("#overlay").style.display = "none";
        this.querySelector("#menu").style.display = "block";
    } else if (
        event.target === this.querySelector("#features") ||
        event.target === this.querySelector("#features-p") ||
        event.target === this.querySelector("#arrow-down-features")
    ) {
        const isOpen = this.querySelector("#features").classList.contains("features-open");
        if (isOpen) {
            this.querySelector("#ul-features").style.display = "none";
            this.querySelector("#arrow-up-features").style.display = "none";
            this.querySelector("#arrow-down-features").style.display = "block";
            this.querySelector("#features").classList.remove("features-open");
            this.querySelector("#features-p").classList.remove("features-open");
        } else {
            this.querySelector("#ul-features").style.display = "block";
            this.querySelector("#arrow-up-features").style.display = "block";
            this.querySelector("#arrow-down-features").style.display = "none";
            this.querySelector("#features").classList.add("features-open");
            this.querySelector("#features-p").classList.add("features-open");
        }
    } else if (
        event.target === this.querySelector("#company") ||
        event.target === this.querySelector("#company-p") ||
        event.target === this.querySelector("#arrow-down-company")
    ) {
        const isOpen = this.querySelector("#company").classList.contains("company-open");
        if (isOpen) {
            this.querySelector("#ul-company").style.display = "none";
            this.querySelector("#arrow-up-company").style.display = "none";
            this.querySelector("#arrow-down-company").style.display = "block";
            this.querySelector("#company").classList.remove("company-open");
            this.querySelector("#company-p").classList.remove("company-open");
        } else {
            this.querySelector("#ul-company").style.display = "block";
            this.querySelector("#arrow-up-company").style.display = "block";
            this.querySelector("#arrow-down-company").style.display = "none";
            this.querySelector("#company").classList.add("company-open");
            this.querySelector("#company-p").classList.add("company-open");
        }
    } else if (
        event.target === this.querySelector("#features-desktop") ||
        event.target === this.querySelector("#features-desktop-p") ||
        event.target === this.querySelector("#arrow-down-features-desktop")
    ) {
        const isOpen = this.querySelector("#features-desktop").classList.contains("features-desktop-open");
        if (isOpen) {
            this.querySelector("#ul-features-desktop").style.display = "none";
            this.querySelector("#arrow-up-features-desktop").style.display = "none";
            this.querySelector("#arrow-down-features-desktop").style.display = "block";
            this.querySelector("#features-desktop").classList.remove("features-desktop-open");
            this.querySelector("#features-desktop-p").classList.remove("features-desktop-open");
        } else {
            this.querySelector("#ul-features-desktop").style.display = "block";
            this.querySelector("#arrow-up-features-desktop").style.display = "block";
            this.querySelector("#arrow-down-features-desktop").style.display = "none";
            this.querySelector("#features-desktop").classList.add("features-desktop-open");
            this.querySelector("#features-desktop-p").classList.add("features-desktop-open");
        }
    } else if (
        event.target === this.querySelector("#company-desktop") ||
        event.target === this.querySelector("#company-desktop-p") ||
        event.target === this.querySelector("#arrow-down-company-desktop")
    ) {
        const isOpen = this.querySelector("#company-desktop").classList.contains("company-desktop-open");
            this.querySelector("#ul-company-desktop").style.display = isOpen ? "none" : "block";
            this.querySelector("#arrow-up-company-desktop").style.display = isOpen ? "none" : "block";
            this.querySelector("#arrow-down-company-desktop").style.display = isOpen ? "block" : "none";
            this.querySelector("#main-desktop").style.marginTop = isOpen ? "1em" : "6em";
            this.querySelector("#company-desktop").classList.toggle("company-desktop-open");
            this.querySelector("#company-desktop-p").classList.toggle("company-desktop-open");
        }
});