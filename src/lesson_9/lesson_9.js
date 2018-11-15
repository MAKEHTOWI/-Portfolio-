import './lesson_9.scss';

const trafficLightBulbs = document.querySelectorAll('.traffic-light__bulb');
const setActive = (activeBulb) => {
    const activeClass = 'traffic-light__bulb--active';

    trafficLightBulbs.forEach((bulb) => {
        bulb.classList.remove(activeClass);
    });

    activeBulb.classList.add(activeClass);
}

let activeBulb = 0;
let goingUp = true;

setInterval(() => {
    setActive(trafficLightBulbs[activeBulb]);

    if (goingUp) {
        activeBulb += 1;
    } else {
        activeBulb -= 1;
    }

    if (activeBulb === 2) {
        goingUp = false;
    } else if (activeBulb === 0) {
        goingUp = true;
    }
}, 1500);