// Displays current date
var displayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(displayDate);

var hourCheck = moment().hour();
console.log(hourCheck);

  


// Time block status, displays grey red or green
 if (hourCheck > 12) {
     $("textarea").addClass("past");
} else if (hourCheck === 9) {
    $("textarea").addClass("present");
} else {
    $("textarea").addClass("future");
}

// on click save button saving to local storage the variable of textEntry

document.querySelector(".saveBtn").addEventListener("click", function() {
    var textEntry = document.querySelector(".description").value;
    console.log(textEntry);
    localStorage.setItem("event", textEntry);

})

document.querySelector(".description").value = localStorage.getItem("event");

// make a for loop