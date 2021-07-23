// Displays current date
var displayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(displayDate);

// Time block status, displays grey red or green
$(".time-block")