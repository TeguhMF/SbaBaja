document.addEventListener("DOMContentLoaded", () => {
    // 1. Ambil Semua Elemen Halaman dan Tombol
    const mainPage = document.getElementById('main-page');
    const katalogPage = document.getElementById('katalog-page');
    const pengirimanPage = document.getElementById('pengiriman-page');
    
    const btnKatalog = document.getElementById('btn-katalog');
    const btnPengiriman = document.getElementById('btn-pengiriman');
    
    const btnKembaliKatalog = document.getElementById('btn-kembali'); // tombol kembali di hal katalog
    const btnKembaliPengiriman = document.getElementById('btn-kembali-pengiriman'); // tombol kembali di hal pengiriman

    // 2. Fungsi Animasi Masuk (Fade-in)
    const runFadeInAnimation = (container) => {
        const elements = container.querySelectorAll('.about-section, .link-card, .review-card, .product-card');
        elements.forEach((el, index) => {
            el.style.opacity = "0";
            el.style.transform = "translateY(15px)";
            el.style.transition = "all 0.3s ease-out";
            
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, index * 60);
        });
    };

    // Jalankan animasi awal pada halaman utama
    runFadeInAnimation(mainPage);

    // ==========================================
    // NAVIGASI HALAMAN KATALOG
    // ==========================================
    btnKatalog.addEventListener('click', () => {
        mainPage.classList.add('d-none');
        katalogPage.classList.remove('d-none');
        window.scrollTo(0, 0);
        runFadeInAnimation(katalogPage);
    });

    btnKembaliKatalog.addEventListener('click', () => {
        katalogPage.classList.add('d-none');
        mainPage.classList.remove('d-none');
        window.scrollTo(0, 0);
        runFadeInAnimation(mainPage);
    });

    // ==========================================
    // NAVIGASI HALAMAN DOKUMENTASI PENGIRIMAN
    // ==========================================
    btnPengiriman.addEventListener('click', () => {
        mainPage.classList.add('d-none');
        pengirimanPage.classList.remove('d-none');
        window.scrollTo(0, 0);
        runFadeInAnimation(pengirimanPage);
    });

    btnKembaliPengiriman.addEventListener('click', () => {
        pengirimanPage.classList.add('d-none');
        mainPage.classList.remove('d-none');
        window.scrollTo(0, 0);
        runFadeInAnimation(mainPage);
    });
});