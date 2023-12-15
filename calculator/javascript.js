let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case 'sin':
            case 'cos':
            case 'tan':
                handleTrigFunctions(e.target.innerText);
                break;
            case 'mod':
                handleMod();
                break;
            case 'x^':
                handlePower();
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

function handleTrigFunctions(func) {
    let angle = prompt(`Enter the angle in degrees for ${func}:`);
    if (angle !== null && !isNaN(angle)) {
        angle = parseFloat(angle);
        if (func === 'sin') display.innerText += Math.sin((angle * Math.PI) / 180);
        else if (func === 'cos') display.innerText += Math.cos((angle * Math.PI) / 180);
        else if (func === 'tan') display.innerText += Math.tan((angle * Math.PI) / 180);
    } else {
        display.innerText = 'Invalid input';
    }
}

function handleMod() {
    let num = prompt('Enter the number for mod:');
    if (num !== null && !isNaN(num)) {
        num = parseFloat(num);
        display.innerText += `%${num}`;
    } else {
        display.innerText = 'Invalid input';
    }
}

function handlePower() {
    let base = prompt('Enter the base:');
    let exponent = prompt('Enter the exponent:');
    if (base !== null && exponent !== null && !isNaN(base) && !isNaN(exponent)) {
        base = parseFloat(base);
        exponent = parseFloat(exponent);
        display.innerText += `${base}**${exponent}`;
    } else {
        display.innerText = 'Invalid input';
    }
}





 
