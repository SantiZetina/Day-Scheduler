$(document).ready(function(){
    var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDate)


    $(".saveBtn").on("click", function() {

        // get the time and description for the current row
        var time = $(this).siblings(".hour").text();
        var description = $(this).siblings(".description").val();
    
        // save the event to local storage
        localStorage.setItem(time, description);
      });
    
      // load saved events from local storage
      $(".hour").each(function() {
    
        // get the time for the current row
        var time = $(this).text();
    
        // get the event description from local storage
        var description = localStorage.getItem(time);
    
        // set the event description for the current row
        $(this).siblings(".description").val(description);
    
        // set the row color based on the current time
        var currentHour = moment().hour();
        // console.log(currentHour);
      
         var hour = parseInt(time);
         console.log(hour);
        //  console.log(currentHour)
         
        if (hour < currentHour) {
          $(this).siblings(".description").addClass("past");
        } else if (hour === currentHour) {
          $(this).siblings(".description").addClass("present");
        } else {
          $(this).siblings(".description").addClass("future");
        }
      });
    
})