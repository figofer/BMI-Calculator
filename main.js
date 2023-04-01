function kalkulator() {
    event.preventDefault()
    const tinggi = Number(document.getElementById("tinggi").value)
    const berat = Number(document.getElementById("berat").value)
    const rumus = tinggi / ((berat / 100) ** 2);
    let kategori;
    if (rumus < 18.5) {
        kategori = "Underweight";
        document.getElementById("hasil").className = "Underweight";
    } else if (rumus < 24.9) {
        kategori = "Normal weight";
        document.getElementById("hasil").className = "Underweight";
    } else if (rumus < 29.9) {
        kategori = "Overweight";
        document.getElementById("hasil").className = "Underweight";
    } else {
        kategori = "Obesity";
        document.getElementById("hasil").className = "Underweight";
    }

    document.getElementById("hasil").innerHTML = 'Your BMI is <strong>' + rumus.toFixed(1) + ' </strong> which means You are <strong>' + kategori + '</strong>.';

}

