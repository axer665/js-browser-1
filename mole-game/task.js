// Обернем всё в функцию, чтобы не было контекстных конфликтов
function main() {

    const holes = document.getElementsByClassName("hole");
    const dead = document.getElementById("dead");
    const lost = document.getElementById("lost");

    const pointsForVictory = 10;
    const pointsForDefeat = 4;

    let fails = 0;
    let wins = 0;

    reset = (message) => {
        alert(message);
        fails = 0;
        wins = 0;
    }

    for (let i = 0; i < holes.length; i++) {
        let hole = holes[i];
        hole.onclick = function() {
            if (this.classList.contains( 'hole_has-mole' )) {
                wins++;
            } else {
                fails++;
            }

            if (wins === pointsForVictory) {
                reset("Вы победили");
            } else if (fails === pointsForDefeat) {
                reset("Вы проиграли");
            }

            dead.textContent = wins;
            lost.textContent = fails;
        }
    }
}

// Вызовем нашу функцию 
main();