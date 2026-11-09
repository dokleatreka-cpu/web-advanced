var noon = "12"
var wakeupTime
var dsTime
var sleepTime;

function showCurrentTime() {
    var clock = document.getElementById("clock")
    var getTime = new Date()

    var hours = getTime.showHours()
    var minutes = getTime.showMinutes()
    var seconds = getTime.showSeconds()

    var meridian = "AM"

    if (hours >= noon) {
        meridian = "PM"
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian

    clock.innerText = clockTime;
    changeImage()
}

function changeImage() {
    var time = new Date().getHours()
    console.log(time)

    var image = "https://th.bing.com/th/id/OIP_5HzAyZPEn3wkB0mPeCYDLghaCW?w=349&h=111&c=7"

    var imageHTML = document.getElementById("timeImage")

    if (time == wakeupTime) {
        image = "https://www.freepik.com/premium-vector/alarm-clock-wakeup-time-isolated-background-flat-style-vector-illustration"
    } else if (time == sleepTime) {
        image = "https://img.magnific.com/free-vector/font-design-word-sleep-time-with-night-sky_1308-74442.jpg?semt=ais_hybrid&w=740&q=80"
    } else {
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm1woW2f467y7HwTzTDrisrDhovjUzzuP31XzVTU4flq8SL8E6cuIfrkqD&s=10"
    }
    imageHTML.src = image
}

function updateclock{
    var wakeTimeSelection
    var wakeupTimeSelector = document.getElementById("wakeupTimeSelector")
wakeupTime = wakeupTimeSelector.value;

var sleepTimeSelector = document.getElementById("sleepTimeSelector")
sleepTime = sleepTimeSelector.value;

var dsTimeSelector = document.getElementById("dsTimeSelector")
dsTime = dsTimeSelector.value;

}

var saveButton = document.getElementById("saveButton")

saveButton.addEventListener("click", updateClock)





















