// SECTION arrays for upgrades
let clickUpgrades = [
    {
        name: 'Rainbows',
        price: 10,
        quantity: 0,
        multiplier: 5
    },
    {
        name: 'Double Rainbows',
        price: 100,
        quantity: 0,
        multiplier: 10,
    }
]

let autoUpgrades = [
    {
        name: 'Magic',
        price: 50,
        quantity: 0,
        multiplier: 10
    },
    {
        name: 'Friendship',
        price: 500,
        quantity: 0,
        multiplier: 100
    }
]

// SECTION global variables
let joyTotal = 0
let rainbowTotal = 0
let magicTotal = 0

// SECTION functions for the game

// NOTE increases the currency per each click
function increaseJoy(){
    console.log("You clicked it")
    // debugger
    clickUpgrades.forEach(upgrade => {
        let total = (upgrade.multiplier * upgrade.quantity)
        console.log();
        joyTotal += total
    })
    joyTotal ++
    updateJoy()
}

function autoIncreaseJoy(){
    autoUpgrades.forEach(upgrade => {
        let total = (upgrade.multiplier * upgrade.quantity)
        joyTotal += total
    })
    updateJoy()
}

// NOTE updates the DOM to display totals
function updateJoy(){
    let joy = document.getElementById('joy')
    joy.innerText = joyTotal
}

function updateRainbows(){
    let rainbow = document.getElementById('totalRainbows')
    rainbow.innerText = rainbowTotal
}

function updateMagic(){
    let magic = document.getElementById('totalMagic')
    magic.innerText = magicTotal
}

function updatePerClick(){
    let totalPerClick = document.getElementById('totalPerClick')
    clickUpgrades.forEach(upgrade => {
        let total = upgrade.multiplier * upgrade.quantity
        totalPerClick.innerText = total + 1
    })
}

function updateAutoClick(){
    let totalAutoClick = document.getElementById('totalAutoClick')
    autoUpgrades.forEach(upgrade => {
        let total = upgrade.multiplier * upgrade.quantity
        totalAutoClick.innerText = total
    })
}

// NOTE purchases an upgrade
function buyRainbow(){
    let rainbow = clickUpgrades.find(i => i.name == 'Rainbows')
    if(joyTotal >= rainbow.price){
        console.log("You got it")
        rainbowTotal++
        rainbow.quantity++
        rainbow.price += 10
        joyTotal -= rainbow.price - 10
        updateRainbows()
        updateJoy()
        updatePerClick()
    } else {
        window.alert("You need more Joy!")
    }
}

function buyMagic(){
    let magic = autoUpgrades.find(i => i.name == 'Magic')
    if(joyTotal >= magic.price){
        console.log("You got it");
        magicTotal++
        magic.quantity++
        magic.price +=50
        joyTotal -= magic.price - 50
        updateJoy()
        updateMagic()
        updateAutoClick()
    } else {
        window.alert("You need more Joy!");
    }
}

// SECTION scripts to run
setInterval(autoIncreaseJoy, 3000)
