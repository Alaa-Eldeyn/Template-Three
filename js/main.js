// Date counter
let countDownDate = new Date("Jul 15, 2023 00:00:00").getTime()
let counter = setInterval(()=>{
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    let time = document.querySelectorAll(".u-p1");
    time[0].textContent = days < 10 ? `0${days}` : days;
    time[1].textContent = hours < 10 ? `0${hours}` : hours;
    time[2].textContent = minutes < 10 ? `0${minutes}` : minutes;
    time[3].textContent = seconds < 10 ? `0${seconds}` : seconds;
    if (dateDiff = 0) clearInterval(counter);
}, 1000);


// Progress
let progressSection = document.getElementById("skills");
let progressSpans = document.querySelectorAll(".skills .progress div span");

// Stats Counter
let statsSection = document.getElementById("stats")
let statsNums = document.querySelectorAll(".stats .nums .box h4");
let started = false;

window.onscroll = function () {
    // Progress
    if (window.scrollY >= progressSection.offsetTop - 200) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width ;
        })
    }
    // Stats Counter
    if (window.scrollY >= statsSection.offsetTop - 200) {
        if (!started) {
            statsNums.forEach((num) => countUp(num));
        }
        started = true
    }
}


function countUp(el) {
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);
}
