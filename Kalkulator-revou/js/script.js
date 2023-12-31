function HasilLuas() {
    alas = document.getElementById("label-alas").value;
    tinggi = document.getElementById("label-tinggi").value;
    luas = (alas * tinggi) * 0.5;
    document.getElementById("label-hasil").value = luas;
}

function resetFormLuas() {
    document.getElementById("label-alas").value = "";
    document.getElementById("label-tinggi").value = "";
    document.getElementById("label-hasil").value = "";
}

function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById("sisi1").value);
    var sisi2 = parseFloat(document.getElementById("sisi2").value);
    var sisi3 = parseFloat(document.getElementById("sisi3").value);
    var keliling = sisi1 + sisi2 + sisi3;
    document.getElementById("hasilKeliling").value = keliling;
}

function resetFormKeliling() {
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
    document.getElementById("hasilKeliling").value = "";
}