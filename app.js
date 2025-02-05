let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let questionDiv = button.closest(".questions");
        let infoDiv = questionDiv.querySelector(".info");
        let plusIcon = button.querySelector(".plus");
        let minusIcon = button.querySelector(".minus");

        if (infoDiv.style.display === "block") {
            infoDiv.style.display = "none";
            plusIcon.style.display = "block";
            minusIcon.style.display = "none";
        } else {
            infoDiv.style.display = "block";
            plusIcon.style.display = "none";
            minusIcon.style.display = "block";
        }
    });
});
