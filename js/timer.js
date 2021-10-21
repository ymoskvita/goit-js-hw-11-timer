const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
    constructor({ onTick, targetDate, selector }) {
        this.onTick = onTick;
        this.targetDate = targetDate;
        this.selector = selector;
        this.start();
    }

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);

            this.onTick({ days, hours, mins, secs })
        }, 1000);
    }

    pad(value) {
    return String(value).padStart(2, '0');
    }

    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }
};

const сountdownTimer = new CountdownTimer({
    onTick: updateClockface,
    selector: '#timer-1',
    targetDate: new Date('Nov 26, 2021')
});

function updateClockface({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;

};

