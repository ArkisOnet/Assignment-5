function Calc() {
    let price = 100;

    let edu = document.getElementById('education').value;
    price *= parseFloat(edu);

    let net = document.getElementById('networth').value;
    price *= parseFloat(net);

    let caste = document.getElementById('caste').value;
    price += parseInt(caste);

    let age = 0;
    if (document.getElementById('18to23').checked) {
        age = 1.5;
    } else if (document.getElementById('24to27').checked) {
        age = 1.2;
    } else if (document.getElementById("28+").checked) {
        age = 0.95;
    }
    price *= age;

    let skills = ['musicalinstrum', 'goodcook', 'easygoing', 'sings'];
    let bonus = 0;
    skills.forEach(skill => {
        if (document.getElementById(skill).checked) {
            if (skill === 'musicalinstrum') bonus += 10;
            if (skill === 'goodcook') bonus += 20;
            if (skill === 'easygoing') bonus += 15;
            if (skill === 'sings') bonus += 10;
        }
    });
    price += bonus;

    let rep = 1;
    if (document.getElementById('parentattitude').checked) {
        rep *= 0.85;
    }
    if (document.getElementById('character').checked) {
        rep *= 0.9;
    }
    if (document.getElementById('parentattitude').checked && document.getElementById('character').checked) {
        rep *= 1.75;
    }
    price *= rep;

    let penalty = 0;
    if (document.getElementById('person').checked) {
        penalty = 20;
    }
    price -= penalty;

    price = Math.max(0, price);

    let resultContainer = document.getElementById('finalPrice');
    
    let priceElement = document.createElement('span');
    priceElement.textContent = `$${price.toFixed(2)}`;
    priceElement.style.color = 'darkgreen';
    
    resultContainer.innerHTML = '';
    resultContainer.appendChild(priceElement);

    document.querySelector('h1').textContent = 'Bride Price Evaluation';
    document.querySelector('button').textContent = 'Recalculate';
}
