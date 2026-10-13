var countDownDate = new Date("Sep 14, 2026 12:37:25").getTime();

var x = setInterval(function() {
var counter =  document.querySelector("#countdown");
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  counter.innerHTML = days + "يوم" + hours + "ساعة "
  + minutes + "دقيقة " + seconds + "ثواني ";

  if (distance < 0) {
    clearInterval(x);
    counter.innerHTML = "لقد وصلت متاخرا";
  }
}, 1000);
document.getElementById("winner").addEventListener("click", function () {

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
        });

