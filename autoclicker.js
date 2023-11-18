// autoClicker.js

// Add this line at the beginning of the file to declare autoClickInterval
let autoClickInterval;

function startAutoClicker(autoClickRate) {
    // Clear existing auto-click interval if any
    clearInterval(autoClickInterval);

    // Start a new auto-click interval using the provided autoClickRate
    autoClickInterval = setInterval(function () {
        clickHandler();
    }, 1000 / autoClickRate);
}

function stopAutoClicker() {
    // Clear the auto-click interval
    clearInterval(autoClickInterval);
}

