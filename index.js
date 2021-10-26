const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// Write a script that, after clicking a button Start, once a second, changes the background color body to a random value from an array using the inline style. 
// When the button is pressed Stop, the background color change should stop.

// ⚠️Note that the button Start can be pressed an infinite number of times. Make sure the button is inactive while the theme change is running Start.

// To generate a random number (the index of the element of the array of colors), use the function randomIntegerFromInterval.


class ColorPicker{
    constructor({ timeInterval, startButton, stopButton, colors }) {
        this.timeInterval = timeInterval;
        this.interval = null;
        this.startButton = startButton;
        this.stopButton = stopButton;
        this.colors = colors;
    }

    start() {
        this.interval = setInterval(this.changeColor.bind(this), this.timeInterval);
        this.startButton.setAttribute("disabled", "");
        this.stopButton.removeAttribute("disabled");
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.startButton.removeAttribute("disabled");
        this.stopButton.setAttribute("disabled", "");
    }

    changeColor() {
        document.body.style.backgroundColor = this.colors[this.randomIntegerFromInterval(0, this.colors.length - 1)];
    }

    randomIntegerFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
}


let refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}
const args = { timeInterval: 1000, startButton: refs.startBtn, stopButton: refs.stopBtn, colors: colors };
const colorPicker = new ColorPicker(args);
refs.startBtn.addEventListener('click', () => colorPicker.start());
refs.stopBtn.addEventListener('click', () => colorPicker.stop());
