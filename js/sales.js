function startCountdown(id, endDate) {
    var countdown = setInterval(function () {
        var now = new Date().getTime();
        var distance = endDate - now;
        if (distance <= 0) {
            clearInterval(countdown);
            document.getElementById(id).innerHTML = "The promotion is over";
        } else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById(id).innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds + "";
        }
    }, 1000);
}

var countdownDate1 = new Date("2023-11-26 00:00:00").getTime();
var countdownDate2 = new Date("2023-12-01 00:00:00").getTime();
var countdownDate3 = new Date("2023-12-15 00:00:00").getTime();
var countdownDate4 = new Date("2023-12-10 00:00:00").getTime();
var countdownDate5 = new Date("2023-12-05 00:00:00").getTime();
var countdownDate6 = new Date("2023-12-20 00:00:00").getTime();

startCountdown("countdown1", countdownDate1);
startCountdown("countdown2", countdownDate2);
startCountdown("countdown3", countdownDate3);
startCountdown("countdown4", countdownDate4);
startCountdown("countdown5", countdownDate5);
startCountdown("countdown6", countdownDate6);
