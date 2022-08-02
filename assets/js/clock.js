//function to get the current time
function curr_time() {
    var date = new Date(); //getting the current date 
    var hour = date.getHours(); //getting the current hour
    var min = date.getMinutes(); //getting the exact minutes
    var sec = date.getSeconds(); //getting the exact seconds
    var currentSession = "AM"; //setting the current session of the day
    
    //checking if hour is equal to 0 then set it to 12
    if(hour === 0){
        hour = 12;
    }
    //checking if the session has crossed AM or not if yes then set to PM
    if(hour > 12){
        hour = hour - 12;
        currentSession = "PM";
     }
  
     hour = (hour < 10) ? "0" + hour : hour;
     min = (min < 10) ? "0" + min : min;
     sec = (sec < 10) ? "0" + sec : sec;
     
     //forming the current time with all the values
     var CurrentTime = hour + ":" + min + ":" + sec + " " + currentSession;
  
    document.getElementById("main_container").innerText = CurrentTime; 

    let t = setTimeout(function(){ time() }, 1000);
  }
  
  curr_time();