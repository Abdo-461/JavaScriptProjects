/**
 * Status Clock 
 * Langugae: Javascript
 * Author : Abdulrahman
 * Company : abdoTech
 */

 //set up variables
 var wakeUpTime = 7;
 var noonTime = 12;
 var lunchTime = 12;
 var smokeTime = lunchTime + 1;
 var partyTime;
 var dontDisturbAbdoTime = 17;

 //showing the current time on page
 var showCurrenTime = function(){

    //display the string on webpage
    var clock = document.getElementById('currentTime');
    //get time
    var currentTime = new Date();
    //get time specifics
    var hour = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiam = "am";

    //set the hours
    if(hour >= noonTime){
        meridiam = "pm";
    }
    //set hour to 12-hour format
    if(hour > noonTime){
        hour = hour - 12;
    }
    //set the minutes
    if(minutes < 10){
        //add zero before the number
        minutes = "0"+minutes;
    }
    //set the seconds
    if(seconds < 10){
        //add zero before the number
        seconds = "0"+seconds;
    }
    //create time format to display on page
    var systemTime = hour+":"+minutes+":"+seconds+" "+meridiam;
    clock.innerText = systemTime;

 };

 //getting the clock to update to change status and photo description
 var updateClock = function(){
     //get the current hour
     var time = new Date().getHours();
     //status at current time
     var status;
     //night time between 12 am and 7 am
     var unGodlyHour = time < 12 && time < 7;
     
     //a photo description how i currently look
     var photoDescription = "images/normal.jpeg";
     // status
     var timeStatus = document.getElementById("timeStatus");
     // photo
     var photo = document.getElementById("photo");

     //blazing time
    //  if(time == smokeTime){
    //      photoDescription = "images/smoke.jpg";
    //      status = "Blazin!";
    //  }
     //wake up time
      if(time == wakeUpTime){
         photoDescription = "images/wake.jpg";
         status = "Waking up now!";
     }
     //lunch time
     else if(time == lunchTime){
         photoDescription = "images/lunch.jpeg";
         status = "Yum Yum time!";
     }
     //party time
    //  else if(time == partyTime){
    //      photoDescription = "images/party.jpeg";
    //      status = "Out to Party!!!!!";
    //  }
     //ungodly time
     else if(unGodlyHour){
         photoDescription = "images/finger.jpeg";
         status = "Don't be offended,you are the one working at night mate!";
     }
     //dont dirturb abdo time
     else if(time >= dontDisturbAbdoTime){
         photoDescription = "images/dontdisturbabdotime.jpeg";
         status = "End of Day, I am out";
     }
     //any other time
     else{
         photoDescription = "images/normal.jpeg";
         status = "I am here for a cool chat! Hit me up!";
     }
     
     //show approprriate status to time
     console.log(status);
     //show the status
     timeStatus.innerText = status;
     //show photo
     photo.src = photoDescription;   
     //getcurrent time
     showCurrenTime();
 };
updateClock();

//make the clock tick
var tick = 1000;
setInterval(updateClock,tick);

//party time button
var partyButton = document.getElementById('smash');
//get the smash button to work
var partyStatus = function(){

    if(partyTime < 0){
        partyTime = new Date().getHours();
    }
    else {
        partyTime = -1;
    }
};
//create a button handaler
partyButton.addEventListener('click',partyStatus);
partyStatus();

//smoke time button
var blazeButton = document.getElementById('blaze');
//get the balzin button to work
var smokingTime = function(){

    if(smokeTime < 0){
        smokeTime = new Date().getHours();
    }
    else{
        smokeTime = -1;
    }
};
//create smoke button handeler
blazeButton.addEventListener('click',smokingTime);
smokingTime();