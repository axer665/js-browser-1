// функция приведения числа к формату времени (23:59:59)
const calculate = (seconds) => {
    let currentDate = new Date();
    let deadline = new Date(new Date().setSeconds(currentDate.getSeconds() + Number(seconds))); 

    // разность дат (автоматом получатся милисекунды)
    const difference = deadline - currentDate; 

    // пусть у нас будет объект, хранащий нужные единицы времени
    const result = {
        hours : difference > 0 ? Math.floor(difference / 1000 / 60 / 60) % 24 : 0, // час
        minutes : difference > 0 ? Math.floor(difference / 1000 / 60) % 60 : 0, // минута
        seconds : difference > 0 ? Math.floor(difference / 1000) % 60 : 0, // секунда
    };

    // добавляем ведущие нули
    const hours = result.hours < 10 ? '0' + result.hours : result.hours; 
    const minute = result.minutes < 10 ? '0' + result.minutes : result.minutes;
    const second = result.seconds < 10 ? '0' + result.seconds : result.seconds;

    return hours + ":" + minute + ":" + second;
}


const timer = document.getElementById("timer");
timerText = timer.textContent;
timer.textContent = calculate(timerText);

// запускаем таймер
const interval = setInterval(function(){
    if (timerText > 0) {
        timerText--;
        timer.textContent = calculate(timerText);
    } else {
        alert("Вы победили в конкурсе!");
        clearInterval(interval); //останавливаем таймер
        timer.textContent = "Вы победили в конкурсе"
        const link = document.getElementById("link_download"); //
        link.click(); 
    }
}, 1000)
