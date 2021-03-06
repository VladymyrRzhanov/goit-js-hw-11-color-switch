import colors from "./colors";


const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.stopBtn.setAttribute("disabled", "disabled");

const colorsSwitcher = {
    intervalId: null,

    randomIntegerFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    
    startColorsSwitcher() {
        this.toggleBtnAttr();
        const max = colors.length - 1;
        if (this.intervalId!==null) {
            return;
        }
        this.intervalId = setInterval(() => {
            const colorsIndex = this.randomIntegerFromInterval(0, max);
            console.log(colorsIndex)
            document.body.style.backgroundColor = colors[colorsIndex];
        }, 1000);
    },

    stopColorsSwitcher() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.toggleBtnAttr();
    },

    toggleBtnAttr() {
        refs.startBtn.toggleAttribute("disabled");
        refs.stopBtn.toggleAttribute("disabled");
    },
};

refs.startBtn.addEventListener('click', () => colorsSwitcher.startColorsSwitcher());
refs.stopBtn.addEventListener('click', () => colorsSwitcher.stopColorsSwitcher());