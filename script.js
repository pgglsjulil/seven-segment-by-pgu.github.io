function inputNumber(number) {
    const input = number;
    const result = truthTable(input);
    showResult(result);
    convertToBinary(input);
}
//amaaaaaan
function convertToBinary(input){
    const binary = input.toString(2).padStart(4, "0");
    document.getElementById("w").textContent = binary[0];
    document.getElementById("x").textContent = binary[1];
    document.getElementById("y").textContent = binary[2];
    document.getElementById("z").textContent = binary[3];
}
//amaaaaaaan
function truthTable(decimal){
    const binary = [
        "1111110", // 0
        "0110000", // 1
        "1101101", // 2
        "1111001", // 3
        "0110011", // 4 
        "1011011", // 5
        "1011111", // 6
        "1110000", // 7
        "1111111", // 8
        "1111011"  // 9
    ];
    const binaryDigits = binary[decimal].split('').map(Number);
    return{
        A: binaryDigits[0], B: binaryDigits[1], C: binaryDigits[2], D: binaryDigits[3], E: binaryDigits[4], F: binaryDigits[5], G: binaryDigits[6]
    }
}

function showResult(result) {
    const segments = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    segments.forEach(segment => {
        const value = result[segment];
        const element = document.getElementById(segment);
        const outputElement = document.getElementById(`binary${segment}`);
    
        element.setAttribute("fill", value === 1 ? "rgb(9, 9, 9)" : "rgb(204, 204, 204)");
        outputElement.textContent = value;
      });
}
