function calculateBMI(weight, height) {
    return weight/(height*height);
};

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight"
    } else if (bmi < 25) {
        return "Normal weight"
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese"
    }
};

let myBMI = calculateBMI(90, 1.91);
console.log (interpretBMI(myBMI))