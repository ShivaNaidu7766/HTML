var froTime = new Date("aug 20, 2023 0:00").getTime(); //Gives the time to which the countdown goes.

var x = setInterval(function () {
    var toTime = new Date().getTime();  //Gives the current time.

    var diff = froTime - toTime; //Gives the difference in time.

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));   //calculates days
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));   //calculates hours
    var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));   //calculates minutes
    var secs = Math.floor((diff % (1000 * 60)) / 1000); //calculates secs

    document.getElementById("timer").innerHTML = days + "d, " + hours + "hrs: " + mins + "m: " + secs + "s"

}, 1000);