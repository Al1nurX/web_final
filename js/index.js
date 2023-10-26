calculateTime = () => {
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    var elementIds = ["day", "hour", "minute", "ampm"];

    for (let i = 0; i < elementIds.length; i++) {
        switch (elementIds[i]) {
            case "day":
                document.querySelector("#" + elementIds[i]).textContent = dayNames[dayNumber];
                break;
            case "hour":
                document.querySelector("#" + elementIds[i]).textContent = hour;
                break;
            case "minute":
                document.querySelector("#" + elementIds[i]).textContent = minute;
                document.querySelector("#" + elementIds[i]).style.color = 'red';
                break;
            case "ampm":
                document.querySelector("#" + elementIds[i]).textContent = ampm;
                break;
        }
    }

    setTimeout(calculateTime, 200);
}

window.addEventListener('load', calculateTime);
