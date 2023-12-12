function inputNumber(number) {
    const input = number;
    const hasil = truthTable(input);
    tampilkanHasil(hasil);
    konversiBiner(input);
}
//amaaaaaan
function konversiBiner(input){
    const biner = input.toString(2).padStart(4, "0");
    document.getElementById("w").textContent = biner[0];
    document.getElementById("x").textContent = biner[1];
    document.getElementById("y").textContent = biner[2];
    document.getElementById("z").textContent = biner[3];
}
//amaaaaaaan
function truthTable(desimal){
    const biner = [
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
    const digitBiner = biner[desimal].split('').map(Number);
    return{
        A: digitBiner[0], B: digitBiner[1], C: digitBiner[2], D: digitBiner[3], E: digitBiner[4], F: digitBiner[5], G: digitBiner[6]
    }
}

function tampilkanHasil(hasil) {
    const segments = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    segments.forEach(segment => {
        const value = hasil[segment];
        const element = document.getElementById(segment);
        const outputElement = document.getElementById(`binary${segment}`);
    
        element.setAttribute("fill", value === 1 ? "rbg(9, 9, 9)" : "rgb(204, 204, 204)");
        outputElement.textContent = value;
      });
}