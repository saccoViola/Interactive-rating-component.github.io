const firstContainer = document.getElementById("first-container");
const secondContainer = document.getElementById("second-container");
secondContainer.style.display = "none";

const buttons = document.getElementById("buttons");
const submitButton = document.getElementById("submit-button");
const selectedNumber = document.getElementById("selected-number");

submitButton.textContent = submitButton.textContent.toUpperCase();

for (let i = 1; i <= 5; i++) {
    const ratingButton = document.createElement("button");
    ratingButton.className="rating-buttons";
    ratingButton.innerHTML = i; 
    buttons.appendChild(ratingButton);
 
}

const ratingButtons = document.querySelectorAll(".rating-buttons");

ratingButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        event.preventDefault();
        ratingButtons.forEach(btn => btn.classList.remove("selected-button"));
        button.classList.add("selected-button");
        selectedNumber.innerHTML = "You selected " + button.innerHTML + " out of 5";
    })
});

submitButton.addEventListener("click", ()=>{
    event.preventDefault();
    const isSelected = Array.from(ratingButtons).some(btn => btn.classList.contains("selected-button"));
    if(isSelected){
        firstContainer.style.display ="none";
        document.getElementById("second-container").removeAttribute("aria-hidden");
        secondContainer.style.display ="block";
    }else{alert("you must select a rating")}
})