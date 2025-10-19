// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Form CTA (dummy)
function handleSubmit(e) {
  // Mencegah form dari reload halaman
  e.preventDefault();
  
  // Menampilkan pesan alert
  alert('Terima kasih! Anda telah terdaftar untuk early access. Kami akan segera menghubungi Anda.');
  
  // Mengosongkan field input setelah submit
  e.target.reset();
}

// Animate on scroll (opsional)
// Membuat observer baru untuk mengamati elemen
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Jika elemen masuk ke dalam viewport
    if (entry.isIntersecting) {
      // Tambahkan class 'show' untuk memicu animasi
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2 // Animasi terpicu saat 20% elemen terlihat
});

// Memilih semua elemen yang ingin dianimasikan dan mulai amati
document.querySelectorAll('.card, .hero-img, .testimoni-card').forEach(el => observer.observe(el));