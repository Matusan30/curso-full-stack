// Dados un peso y una altura, crear una función que calcule el bmi y aparte dé una interpretación

function bmiCalculator (weight, height) {
    var bmi = (weight/(height*height));
    var interpretation = "Your BMI is " + bmi
    
    if (bmi < 18.5) {
        interpretation = interpretation + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = interpretation + ", so you have a normal weight.";
    } else if (bmi > 24.9) {
        interpretation = interpretation + ", so you are overweight.";
    }
    
    
    return interpretation;
}