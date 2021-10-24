class CountdownTimer {
    constructor({ targetDate, selector }) {
        this.targetDate = targetDate;
        this.selector = selector;
        this.start();
    }

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);

            this.updateClockface({ days, hours, mins, secs })
        }, 1000);
    }

    pad(value) {
    return String(value).padStart(2, '0');
    }
    padDays(value) {
        return String(value).padStart(3, '0');
    }

    getTimeComponents(time) {
    const days = ((Math.floor(time / (1000 * 60 * 60 * 24))) > 99) ? this.padDays(Math.floor(time / (1000 * 60 * 60 * 24))) : this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }

    updateClockface({ days, hours, mins, secs }) {
    const refs = {
        days: document.querySelector(`${this.selector} span[data-value="days"]`),
        hours: document.querySelector(`${this.selector} span[data-value="hours"]`),
        mins: document.querySelector(`${this.selector} span[data-value="mins"]`),
        secs: document.querySelector(`${this.selector} span[data-value="secs"]`),
    };

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
    };
};

const сountdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Nov 26, 2021')
});

