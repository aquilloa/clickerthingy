let score = 0;
let clickRate = 1;

const upgrades = {
    "A little more clicksUpgrade": { baseCost: 15, effect: 0.1, description: "increases clicks by 0.1", count: 0 },
    "A bit more clicksUpgrade": { baseCost: 50, effect: 0.5, description: "increases clicks by 0.5", count: 0 },
    "Even more clicksUpgrade": { baseCost: 125, effect: 0.75, description: "increases clicks by 0.75", count: 0 },
    "Getting more clicksUpgrade": {baseCost: 175, effect: 1, description: "increases clicks by 1", count: 0},
    "Geeting to the bigger onesUpgrade": {baseCost: 245, effect: 1.5, description: "increases clicks by 1.5", count:0},
    "Ok now your just trying too hardUpgrade": {baseCost: 350, effect: 3, description: "increses clicks by 3", count: 0},
    "Alright I'll give you some ggod stuff nowUpgrade": {baseCost: 430, effect: 10, description: "increases clicks by 10", count:0},
    "Thanks for playing my game this longUpgrade": {baseCost: 500, effect: 15, description: "increases clicks by 15", count: 0},
    "Ok now if you haven't taken a break take oneUpgrade": {baseCost: 700, effect: 25, description: "increases clicks by 25", count: 0},
    "Alright enough with the jokes I really do appreactiate you playing this longUpgrade": {baseCost: 900, effect: 40, description: "increases clicks by 25", count: 0},
    "Ok lets get this game going with the big numbersUpgrade": {baseCost: 900, effect: 50, description: "increases clicks by 50", count: 0},
    "And now for my next actUpgrade": {baseCost: 1200, effect: 80, description: "increases clicks by 80", count: 0},
    "And for my final act of the nightUpgrade": {baseCost: 2000, effect: 100, description: "increases clicks by 100", count: 0},
    "Sike I lied but this one is it for realUpgrade": {baseCost: 2500, effect: 2, description: "doubles clicks"}
};

function updateLabels() {
    document.getElementById("emojiLabel").textContent = `Emojis: ${formatCurrency(score)}`;
    document.getElementById("clickRateLabel").textContent = `Click Rate: ${formatCurrency(clickRate)} clicks per emoji`;
    updateUpgradeUI();
}

function formatCurrency(value) {
    // Round to the nearest hundredth
    return Math.round(value * 100) / 100;
}

function clickHandler() {
    updateEmoji();
    const floatingEmoji = document.createElement("label");
    floatingEmoji.className = "floatingEmoji";
    score += clickRate;
    document.getElementById("cookieContainer").appendChild(floatingEmoji);

    setTimeout(() => {
        floatingEmoji.remove();
        updateLabels();
    }, 2000);
}

function updateEmoji() {
    const cookieLabel = document.getElementById("cookie");
    const emojiOptions = ["👆", "🍦", "🍕", "🍔", "🍰", "🍩", "🍓", "🍭", "🍎", "🍇", "🍌", "🍉", "🍒", "🍑", "🍍", "🥝", "🥑", "🍊", "🍋", "🍈", "🍏", "🍟", "🍔", "🍕", "🍖", "🍗", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍞", "🍟", "🍠", "🍡", "🍢", "🍣", "🍤", "🍥", "🍦", "🍧", "🍨", "🍩", "🍪", "🍫", "🍬", "🍭", "🍮", "🍯", "🍰", "🍱", "🍲", "🍳", "🍴", "🍵", "🍶", "🍷", "🍸", "🍹", "🍺", "🍻", "🍼", "🍽️", "🍾", "🍿", "🎂", "🎃", "🎄", "🎅", "🎆", "🎇", "🎈", "🎉", "🎊", "🎋", "🎌", "🎍", "🎎", "🎏", "🎐", "🎑", "🎒", "🎓", "🎠", "🎡", "🎢", "🎣", "🎤", "🎥", "🎦", "🎧", "🎨", "🎩", "🎪", "🎫", "🎬", "🎭", "🎮", "🎯", "🎰", "🎱", "🎲", "🎳", "🎴", "🎵", "🎶", "🎷", "🎸", "🎹", "🎺", "🎻", "🎼", "🎽", "🎾", "🎿", "🏀", "🏁", "🏂", "🏃", "🏄", "🏅", "🏆", "🏇", "🏈", "🏉", "🏊", "🏋️", "🏌️", "🏍️", "🏎️", "🏏", "🏐", "🏑", "🏒", "🏓", "🏔️", "🏕️", "🏖️", "🏗️", "🏘️", "🏙️", "🏚️", "🏛️", "🏜️", "🏝️", "🏞️", "🏟️", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🏰", "🏳️", "🏴", "🏵️", "🏷️", "🏸", "🏹", "🏺", "🏻", "🏼", "🏽", "🏾", "🏿", "🐀", "🐁", "🐂", "🐃", "🐄", "🐅", "🐆", "🐇", "🐈", "🐉", "🐊", "🐋", "🐌", "🐍", "🐎", "🐏", "🐐", "🐑", "🐒", "🐓", "🐔", "🐕", "🐖", "🐗", "🐘", "🐙", "🐚", "🐛", "🐜", "🐝", "🐞", "🐟", "🐠", "🐡", "🐢", "🐣", "🐤", "🐥", "🐦", "🐧", "🐨", "🐩", "🐪", "🐫", "🐬", "🐭", "🐮", "🐯", "🐰", "🐱", "🐲", "🐳", "🐴", "🐵", "🐶", "🐷", "🐸", "🐹", "🐺", "🐻", "🐼", "🐽", "🐾", "🐿️", "👀", "👁️", "👂", "👃", "👄", "👅", "👆", "👇", "👈", "👉", "👊", "👋", "👌", "👍", "👎", "👏", "👐", "👑", "👒", "👓", "👔", "👕", "👖", "👗", "👘", "👙", "👚", "👛", "👜", "👝", "👞", "👟", "👠", "👡", "👢", "👣", "👤", "👥", "👦", "👧", "👨", "👩", "👪", "👫", "👬", "👭", "👮", "👯", "👰", "👱", "👲", "👳", "👴", "👵", "👶", "👷", "👸", "👹", "👺", "👻", "👼", "👽", "👾", "👿", "💀", "💁", "💂", "💃", "💄", "💅", "💆", "💇", "💈", "💉", "💊", "💋", "💌", "💍", "💎", "💏", "💐", "💑", "💒", "💓", "💔", "💕", "💖", "💗", "💘", "💙", "💚", "💛", "💜", "💝", "💞", "💟", "💠", "💡", "💢", "💣", "💤", "💥", "💦", "💧", "💨", "💩", "💪", "💫", "💬", "💭", "💮", "💯", "💰", "💱", "💲", "💳", "💴", "💵", "💶", "💷", "💸", "💹", "💺", "💻", "💼", "💽", "💾", "💿", "📀", "📁", "📂", "📃", "📄", "📅", "📆", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "📏", "📐", "📑", "📒", "📓", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📛", "📜", "📝", "📞", "📟", "📠", "📡", "📢", "📣", "📤", "📥", "📦", "📧", "📨", "📩", "📪", "📫", "📬", "📭", "📮", "📯", "📰", "📱", "📲", "📳", "📴", "📵", "📶", "📷", "📸", "📹", "📺", "📻", "📼", "📽️", "📾", "📿", "🔀", "🔁",];
    const randomIndex = Math.floor(Math.random() * emojiOptions.length);
    const newEmoji = emojiOptions[randomIndex];
    cookieLabel.textContent = newEmoji;
}

function buyUpgrade(upgradeId) {
        const upgrade = upgrades[upgradeId];
        const cost = calculateUpgradeCost(upgrade);

        if (score >= cost) {
            score -= cost;

            if (upgradeId === "Sike I lied but this one is it for realUpgrade") {
                clickRate *= upgrade.effect;
            } else {
                clickRate += upgrade.effect;
            }

            upgrade.count++;
            updateLabels(); // Update labels after the purchase
        } else {
            console.log("Not enough emojis to buy this upgrade. Keep clicking!");
        }
    }
}


function calculateUpgradeCost(upgrade) {
    // Upgrade cost increases with each purchase
    if (upgrade.id === "sikeUpgrade") {
        return upgrade.baseCost * Math.pow(1.33, upgrade.count);
    } else {
        return upgrade.baseCost;
    }
}

function updateUpgradeUI() {
    console.log("Clearing existing content...");
    const upgradeContainer = document.getElementById("upgradeContainer");

    upgradeContainer.innerHTML = '';

    Object.keys(upgrades).forEach((upgradeId) => {
        const upgrade = upgrades[upgradeId];
        const upgradeDiv = document.createElement("div");
        upgradeDiv.className = "upgrade";

        upgradeDiv.innerHTML = `
            <label>${upgradeId.replace("Upgrade", "")}</label>
            <p class="upgradeDescription">${upgrade.description}</p>
            <button onclick="buyUpgrade('${upgradeId}')">Buy Upgrade</button>
            <p class="upgradeDescription">Cost: ${formatCurrency(calculateUpgradeCost(upgrade))} emojis</p>
        `;

        upgradeContainer.appendChild(upgradeDiv);
    });
}

function formatCurrency(value) {
    // Round to the nearest 100th
    const roundedValue = Math.round(value * 100) / 100;
    return roundedValue.toFixed(2); // Convert to string with two decimal places
}
