
let output = document.getElementById("output-display");

function todisplay(v) {
    output.value += v;
}

function reset() {
   output.value = '';
}

function del(){
    output.value=output.value.slice(0,-1);
}

function calculate() {
    
    var t = output.value.match(/[+\-*/]|\d+(\.\d+)?/g);

    if (!t || t.length < 3) {
        alert('Invalid expression!');
        return;
    }

    var result = parseFloat(t[0]);

    for (var i = 1; i < t.length; i += 2) {
        var operator = t[i];
        var operand = parseFloat(t[i + 1]);

        switch (operator) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                if (operand === 0) {
                    alert('Division by zero is not allowed!');
                    return;
                }
                result /= operand;
                break;
            default:
                break;
        }
    }

    output.value = result;
}