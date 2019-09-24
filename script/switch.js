var body = document.getElementById("body");
var currentClass = body.className;
currentClass = sessionStorage.getItem("toggle");
body.className = currentClass;

function toggleDarkLight() {
    console.log(`Before switching the toggle value is: ${sessionStorage.getItem("toggle")}`);

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

    console.log(`Current class is: ${currentClass}`);
    console.log(`After switching the toggle value is: ${sessionStorage.getItem("toggle")}`);
}
