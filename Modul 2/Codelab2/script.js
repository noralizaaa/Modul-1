function hitungPenjumlahan() {
    // Ambil nilai dari input
    var bilangan1 = document.getElementById('bilangan1').value;
    var bilangan2 = document.getElementById('bilangan2').value;
    
    // Pastikan nilainya angka
    if (bilangan1 === '' || bilangan2 === '') {
        alert('Harap masukkan kedua angka.');
        return;
    }

    // Hitung hasil penjumlahan
    var hasil = parseFloat(bilangan1) + parseFloat(bilangan2);

    // Tampilkan hasil
    document.getElementById('hasil').innerHTML = 'Hasil: ' + hasil;
}

function resetForm() {
    // Kosongkan input dan hasil
    document.getElementById('bilangan1').value = '';
    document.getElementById('bilangan2').value = '';
    document.getElementById('hasil').innerHTML = 'Hasil: ';
}
