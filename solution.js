function attachEventsListeners() {

    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let rations = {
        days:1,
        hours:24,
        minutes:1440,
        seconds:86400
    }



    daysButton.addEventListener('click',onClick);
    hoursButton.addEventListener('click',onClick);
    minutesButton.addEventListener('click',onClick);
    secondsButton.addEventListener('click',onClick);

    function convertor(value,unit){
        let days = value / rations[unit];
        return {
            days: days,
            hours: days*rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds
        }
    }

    function onClick(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = convertor(Number(input.value),input.id);
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}