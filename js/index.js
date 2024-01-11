const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {

        deselectButton();

        button.classList.add("select");

        deselectCharacter();

        characters[index].classList.add("select");
    });
});

function deselectButton() {
    const selectButton = document.querySelector(".select.button");
    selectButton.classList.remove("select");
};

function deselectCharacter() {
    const selectCharacter = document.querySelector(".select.character");
    selectCharacter.classList.remove("select");
};