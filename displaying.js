// Saving events
function savetext() {
    const inputtext = document.getElementById("textinput").value;
    let events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(inputtext);
    localStorage.setItem("events", JSON.stringify(events));
    
    window.location.href = "welcome.html";
}

// Displaying events
function output() {
    const events = JSON.parse(localStorage.getItem("events"));
    const displayArea = document.getElementById("display");

    if (events.length > 0) {
        const eventList = document.createElement("ul");
        events.forEach(event => {
            const listItem = document.createElement("li");
            listItem.textContent = event;
            eventList.appendChild(listItem);
        });
        displayArea.appendChild(eventList);
    } else {
        displayArea.textContent = "No events stored.";
    }
}

// Initialize the "events" array in local storage if it doesn't exist
// if (!localStorage.getItem("events")) {
//     localStorage.setItem("events", "[]");
// }

// Check if we are on the welcome page and call the displayEvents function
if (window.location.pathname.includes("welcome.html")) {
    output();
}
