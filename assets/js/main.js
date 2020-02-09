
$(document).ready(function(){


    // wow fire function
    new WOW().init();


    // start counter down 
    var deadline = new Date("Mar 25, 2020 12:00:00").getTime(); 
    var x = setInterval(function() { 
    var now = new Date().getTime(); 
    var t = deadline - now; 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById("demo").innerHTML = `${days} Days : ${hours} Hrs : ${minutes } Mins : ${seconds } Secs  `; 
        if (t < 0) { 
            clearInterval(x); 
            document.getElementById("demo").innerHTML = "EXPIRED"; 
        } 
    }, 1000); 

















})