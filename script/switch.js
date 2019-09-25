
var body = document.getElementById("body"); //find body ID on page
var currentClass = body.className; //assign it to currentClass variable

// if toggle from session storage isn't null, assign the value to currentClass
if(sessionStorage.getItem("toggle") != null){
    currentClass = sessionStorage.getItem("toggle");
}
// otherwise assign it to our default "light-mode"
else{
    sessionStorage.setItem("toggle", "light-mode");
}
// reassigns the body className to value after check when the page loads
body.className = currentClass;

// console.log(`Page loaded. className is ${currentClass}.`);

// toggles dark mode on and off from a button in navbar.
function toggleDarkLight() {
    console.log(`Before switching the toggle value is: ${sessionStorage.getItem("toggle")}`);

    //CLEAN UP THIS CODE'S REDUNDANCY
    if (sessionStorage.getItem("toggle") === "light-mode") {
        body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
        sessionStorage.setItem("toggle", "dark-mode");
        currentClass = body.className;
    } else if (sessionStorage.getItem("toggle") == null || undefined) {
        body.className = "light-mode";
        sessionStorage.setItem("toggle", "light-mode");
        currentClass = body.className;
    } else if (sessionStorage.getItem("toggle") === "dark-mode") {
        body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
        sessionStorage.setItem("toggle", "light-mode");
        currentClass = body.className;
    }

    // console.log(`Current class is: ${currentClass}`);
    // console.log(`After switching the toggle value is: ${sessionStorage.getItem("toggle")}`);
}
