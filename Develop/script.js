// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtn = $('.saveBtn')
var timeDisplayEl = $('#currentDay')

saveBtn.on('click', function (){
  console.log($(this).parent())
  var myParentId = $(this).parent().attr("id")
  var myTaskToSave = $(this).siblings(".description").val()
 localStorage.setItem(myParentId, myTaskToSave)
})

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);


var taskAreas = $(".description")
taskAreas.each(function(){
  console.log($(this))
  var myParentId = $(this).parent().attr("id")
  var whatIsStored = localStorage.getItem(myParentId)
  $(this).text(whatIsStored)
})

var now = dayjs().hour()
console.log(now)

var str = 'hour-90'
var matches = str.match(/(\d+)/);
console.log(matches)

var hourEach = $('.row')
hourEach.each(function(){
  var myHourId = $(this).attr("id")
  //if checks, get the stuff from matches, and based on your condition, apply your class :D
})

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
