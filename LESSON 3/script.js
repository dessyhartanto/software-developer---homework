// Program menentukan posisi pemain di 2D game berdasarkan koordinat x, y
function posisiPemain(x, y) {
    if (x > 0 && y > 0) {
        console.log('Top Right');
    } else if (x < 0 && y < 0) {
        console.log('Bottom Left');
    } else if (x > 0 && y < 0) {
        console.log('Bottom Right');
    } else if (x < 0 && y > 0) {
        console.log('Top Left');
    } else {
        console.log('Middle'); // jika x = 0 atau y = 0 (sesuai gambar, kelinci di tengah)
    }
}

posisiPemain(5, 5);    // Top Right
posisiPemain(-5, -5);  // Bottom Left
posisiPemain(5, -5);   // Bottom Right
posisiPemain(-5, 5);   // Top Left
posisiPemain(0, 0);    // Middle