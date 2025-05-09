function Calc(){
    let cash=100;
    let education=parseFloat(document.getElementById("education").value);
    let networth=parseFloat(document.getElementById("networth").value);
    let caste=parseInt(document.getElementById("caste").value);
    const skillValues = {
        musicalinstrum: 10,
        goodcook: 20,
        easygoing: 15,
        sings: 10
    };
    let selectedSkills = Object.keys(skillValues);
    let activeSkills = [];
    let bonus=0;
    selectedSkills.forEach(skill => {
        const element = document.getElementById(skill);
        if (element && element.checked) {
            bonus += skillValues[skill];
            activeSkills.push(skill);
        }
    });
    let age=0;
    if(document.getElementById('18to23').checked){
        age=1.5;
    }else if(document.getElementById('24to27').checked){
        age=1.2;
    }else if(document.getElementById("28+").checked){
        age=0.95;
    }
    let rep=1;
    let penalty=0;
    if(document.getElementById("parentattitude").checked){
        rep*=0.85;
    }if(document.getElementById("character").checked){
        rep*=0.9;
    }if(document.getElementById('person').checked){
        penalty=20;
    }
    let ans=((cash*education*networth*age)+caste+bonus-penalty)*rep;
    const result = document.getElementById("finalPrice");
    result.textContent = `$${ans.toFixed(2)}`;    
    result.style.color = "darkgreen";    
    document.querySelector("h1").textContent = "Bride Price Evaluation";
    document.querySelector("button").textContent = "Recalculate";
}