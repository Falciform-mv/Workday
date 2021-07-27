// Displays current date
var displayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(displayDate);

var hourCheck = moment().hour();


// const currentHour = 13;

// const shadeDiv = function(h) {
//     const classDynamic = `.${h}`
//     const timeNow = document.querySelector(classDynamic)
//     $(`.${h}`).addClass("present");
//     console.log(classDynamic);
//     console.log(timeNow);

// }



//   for loop 


// Time block status, timeValue variable targets the ID plus a number 9-18. If the current time in hourCheck is greater than
// the i value, add a particular class to timeValue, which equals the target of # plus i
for (i = 9; i < 18; i++) {
    let timeValue = $("#" + i);
    // var hourCheck = 11;
    var hourCheck = moment().hour();

  if (hourCheck > i) {
     timeValue.addClass("past");
 } else if (hourCheck === i) {
     timeValue.addClass("present");
 } else {
     timeValue.addClass("future");
    //  $("textarea").addClass("future");
 }

}
// end of for loop
// });


// on click save button saving to local storage the variable of textEntry

document.querySelector(".saveBtn").addEventListener("click", function() {
    var textEntry = document.querySelector(".description").value;
    localStorage.setItem("event", textEntry);

})

document.querySelector(".description").value = localStorage.getItem("event");

