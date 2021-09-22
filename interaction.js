document.querySelector(".share-image-container").addEventListener("click", myFunction);

function myFunction() {
    let x = document.querySelector(".share-context-container").style.visibility;
    if (x === "hidden") {
        document.querySelector(".share-context-container").style.visibility = 'visible';
    } else {
        document.querySelector(".share-context-container").style.visibility = "hidden";
    }
}