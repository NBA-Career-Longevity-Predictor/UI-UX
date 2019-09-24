// function toggleDarkLight() {
//     var body = document.getElementById("body");
//     var currentClass = body.className;
//     body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
// }

// function toggleDarkLight() {
//     if (document.body.style.backgroundColor == 'white') {
//             console.log("toggled to dark")
//             document.body.style.backgroundColor = '#333';
//     }
//     else {
//         console.log("toggled to light")
//             document.body.style.backgroundColor = 'white';
//     }
// }

// document.body.style.backgroundColor = sessionStorage.getItem('bg');
// document.body.style.color = sessionStorage.getItem('cc');
// function toggleDarkLight() {
//      if ( sessionStorage.getItem('bg') === 'white') {

//             sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
//             sessionStorage.setItem('cc', '#777');

//      }
//     else if (sessionStorage.getItem('bg') == null || undefined) {
//         sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
//         sessionStorage.setItem('cc', '#777');

//     }
//     else if( sessionStorage.getItem('bg') === 'rgb(6, 23, 37)') {

//         sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
//         sessionStorage.setItem('cc', '#333');

//     }

// document.body.style.backgroundColor = sessionStorage.getItem('bg');
// document.body.style.color = sessionStorage.getItem('cc');
// }
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
