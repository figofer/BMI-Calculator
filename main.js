function kalkulator() {
    event.preventDefault()
    const tinggi = Number(document.getElementById("tinggi").value)
    const berat = Number(document.getElementById("berat").value)
    const rumus = tinggi / ((berat / 100) ** 2);
    let kategori;
    let gambar;
    if (rumus < 18.5) {
        kategori = "Underweight ";
        gambar = "<img src='/gambar/Underweight.png' alt='Underweight'>";
        document.getElementById("hasil").className = "Underweight";
    } else if (rumus < 24.9) {
        kategori = "Normal weight";
        gambar = "<img src='/gambar/normal.png' alt='Normal'>";
        document.getElementById("hasil").className = "Normal";
    } else if (rumus < 29.9) {
        kategori = "Overweight";
        gambar = "<img src='/gambar/Overweight.png' alt='Overweight'>";
        document.getElementById("hasil").className = "Overweight";
    } else {
        kategori = "Obesity";
        gambar = "<img src='/gambar/Obesity.png'>";
        document.getElementById("hasil").className = "Obesity";
    }

    document.getElementById("hasil").innerHTML = '<p>Your BMI is <b>' + rumus.toFixed(1) + ' </b> which means You are <b>' + kategori + '</b>.</p>' + gambar;

}
