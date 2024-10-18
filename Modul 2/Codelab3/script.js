function validateForm() {
    // Ambil nilai dari input
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var alamat = document.getElementById('alamat').value;
    
    // Validasi email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Cek apakah semua input telah diisi
    if (nama === '' || email === '' || alamat === '') {
        alert('Harap isi semua kolom!');
        return false;
    }

    // Cek apakah email valid
    if (!emailPattern.test(email)) {
        alert('Harap masukkan format email yang valid!');
        return false;
    }

    // Jika semua validasi berhasil
    alert('Pendaftaran berhasil!');
    return true;
}
