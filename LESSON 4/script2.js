// Variable batas waktu bermain game per hari (dalam jam)
var timeLimit = 2;

// Array waktu bermain game Steve setiap hari dalam seminggu
var playTime = [2, 2, 3, 3, 1, 4, 5]; // Senin - Minggu

// Variable untuk menyimpan total waktu bermain
var totalTime = 0;

// Variable untuk menghitung berapa kali melebihi batas waktu
var exceedCount = 0;

// Loop untuk menjumlahkan total waktu dan mengecek pelanggaran batas waktu
for (var i = 0; i < playTime.length; i++) {
    totalTime += playTime[i]; // menjumlahkan waktu bermain hari ke-i ke total

    if (playTime[i] > timeLimit) { // cek apakah waktu hari ini melebihi batas
        exceedCount++; // tambah hitungan jika melebihi batas
    }
}

// Menampilkan hasil ke console
console.log('Total time playing games: ' + totalTime + ' hours');
console.log('Number of times exceeded the limit: ' + exceedCount + ' times');