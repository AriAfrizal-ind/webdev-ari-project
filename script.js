// ========================================
// FITUR 1: DARK/LIGHT MODE TOGGLE
// ========================================

// Variabel untuk melacak tema saat ini
let isDarkMode = false;

// Fungsi untuk mengubah tema
function ubahTema() {
    console.log("Tombol ubah tema diklik");
    
    const body = document.body;
    
    if (isDarkMode) {
        // Kembali ke Light Mode
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#333333";
        console.log("Mode: Light");
    } else {
        // Ubah ke Dark Mode
        body.style.backgroundColor = "#1a1a1a";
        body.style.color = "#f0f0f0";
        console.log("Mode: Dark");
    }
    
    // Toggle status tema
    isDarkMode = !isDarkMode;
}


// ========================================
// FITUR 2: SAPAAN PENGUNJUNG DINAMIS
// ========================================

function sapaPengunjung() {
    console.log("Tombol sapa pengunjung diklik");
    
    // Meminta nama pengunjung
    const namaPengunjung = prompt("Siapa nama Anda?");
    
    // Cek apakah pengunjung mengisi nama
    if (namaPengunjung && namaPengunjung.trim() !== "") {
        // Tampilkan sapaan
        const pesanSapaan = `Halo, ${namaPengunjung}! Selamat datang di portfolio saya! 👋`;
        
        // Tampilkan di elemen HTML
        const elemenGreeting = document.getElementById("greeting");
        if (elemenGreeting) {
            elemenGreeting.innerText = pesanSapaan;
            elemenGreeting.style.display = "block";
        }
        
        // Juga tampilkan alert
        alert(pesanSapaan);
        
        console.log(`Pengunjung bernama: ${namaPengunjung}`);
    } else {
        alert("Anda tidak memasukkan nama!");
        console.log("Pengunjung tidak memasukkan nama");
    }
}


// ========================================
// FITUR 3: CONSOLE LOGGER & TRACKING
// ========================================

// Fungsi untuk mencatat aktivitas pengunjung
function logAktivitas(namaAksi) {
    const waktu = new Date().toLocaleTimeString('id-ID');
    console.log(`[${waktu}] Aksi: ${namaAksi}`);
}

// Event listener untuk semua link navigasi
function setupNavigationLogger() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const tujuan = this.getAttribute('href');
            logAktivitas(`Navigasi ke ${tujuan}`);
        });
    });
}


// ========================================
// BONUS: ANIMASI SCROLL SMOOTH
// ========================================

function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


// ========================================
// INISIALISASI SAAT HALAMAN DIMUAT
// ========================================

// Pastikan DOM telah dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Portfolio loaded successfully!");
    console.log("📄 Script.js siap digunakan");
    
    // Setup fitur-fitur
    setupNavigationLogger();
    setupSmoothScroll();
    
    // Log informasi halaman
    logAktivitas("Halaman dimuat");
    
    console.log("==========================================");
    console.log("Portfolio Ari Afrizal - UNIM BONE");
    console.log("Fitur aktif:");
    console.log("1. ✓ Dark/Light Mode Toggle");
    console.log("2. ✓ Sapaan Pengunjung");
    console.log("3. ✓ Console Logger");
    console.log("==========================================");
});