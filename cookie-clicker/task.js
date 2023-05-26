let count = 0;
let zoom = false;

let fullTime = 0; // будем хранить время, затраченное на все клики (от 1 до последнего)
let currentDate = new Date();

const clicker = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const average = document.getElementById("clicker__average");
const speed = document.getElementById("clicker__speed");

const imageWidth = clicker.width; // ширина изображения
const imageHeight = clicker.height; // высота изображения 
const coefficient = 1.2; // коэффициент увеличения изображения

clicker.onclick = () => {
    count++;
    counter.textContent = count;
    zoom = zoom === false ? true : false;

    // увеличиваем или уменьшаем печеньку
    if (zoom === true) {
        clicker.width = imageWidth * coefficient;
        clicker.height = imageHeight * coefficient
    } else {
        clicker.width = imageWidth;
        clicker.height = imageHeight;
    }

    // считаем разность между текущим временем и временем последнего клика
    let dateDifference = (new Date()) - currentDate;
    // результат приводим к секундам 
    let stepAverageTime = dateDifference / 1000; 

    fullTime += stepAverageTime;

    // средняя скорость клика
    const clickSpeedLast = (fullTime / count).toFixed(2);
    
    // скорость последнего клика
    const clickSpeedAverage = stepAverageTime.toFixed(2);

    // обновляем текущую дату
    currentDate = new Date(); 
    
    average.textContent = clickSpeedLast;
    speed.textContent = clickSpeedAverage;
}