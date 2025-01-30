const secondContainer = document.getElementById("second-container");
secondContainer.style.display = "none";


const buttons = document.getElementById("buttons");

const submitButton = document.getElementById("submit-button");

const firstContainer = document.getElementById("first-container");

const selectedNumber = document.getElementById("selected-number");


submitButton.textContent = submitButton.textContent.toUpperCase();

submitButton.addEventListener("click", ()=>{
    firstContainer.style.display ="none";
    secondContainer.style.display ="block";

})

// firstContainer.style.display = "none";

for (let i = 1; i <= 5; i++) {
    const ratingButton = document.createElement("button");
    ratingButton.className="rating-buttons";
    ratingButton.innerHTML = i; 
    buttons.appendChild(ratingButton);
    ratingButton.addEventListener("click", ()=>{
        ratingButton.style.backgroundColor = "hsl(25, 97%, 53%)";
        ratingButton.style.color="hsl(213, 19%, 15%)";
        selectedNumber.innerHTML = "You selected " + i + " out of 5";
    })
}


