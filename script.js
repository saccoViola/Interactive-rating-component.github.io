const secondContainer = document.getElementById("second-container");
secondContainer.style.display = "none";


const buttons = document.getElementById("buttons");

const submitButton = document.getElementById("submit-button");

const firstContainer = document.getElementById("first-container");

const selectedNumber = document.getElementById("selected-number");


submitButton.textContent = submitButton.textContent.toUpperCase();



// firstContainer.style.display = "none";

for (let i = 1; i <= 5; i++) {
    const ratingButton = document.createElement("button");
    ratingButton.className="rating-buttons";
    ratingButton.innerHTML = i; 
    buttons.appendChild(ratingButton);
    ratingButton.addEventListener("click", ()=>{
        event.preventDefault();
        ratingButton.style.backgroundColor = "hsl(25, 97%, 53%)";
        ratingButton.style.color="hsl(213, 19%, 15%)";
        selectedNumber.innerHTML = "You selected " + i + " out of 5";
    })

    submitButton.addEventListener("click", ()=>{
        event.preventDefault();
        firstContainer.style.display ="none";
        document.getElementById("second-container").removeAttribute("aria-hidden");
        secondContainer.style.display ="block";

    })
}



/*
alert if no rating button is clicked before clicking the submitButton


se 


if 
 (ratingButton.addEventListener("click", ()=>{
        ratingButton.style.backgroundColor = "hsl(25, 97%, 53%)";
        ratingButton.style.color="hsl(213, 19%, 15%)";
        selectedNumber.innerHTML = "You selected " + i + " out of 5";
})){
    submitButton.addEventListener("click", ()=>{
    firstContainer.style.display ="none";
    secondContainer.style.display ="block";
        }



    submitButton.addEventListener("click", ()=>{
    firstContainer.style.display ="none";
    secondContainer.style.display ="block";

})

If the user clicks on several rating buttons one after the other, they all turn orange. It would be more user friendly to have only the rating button that has been most recently clicked be orange*/ 
