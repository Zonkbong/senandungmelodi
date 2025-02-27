// 1. Inisialisasi EmailJS dengan Public Key Anda
emailjs.init('6-FCH3ad59F-Lz4nD'); // Pastikan ini Public Key dari dashboard EmailJS

// 2. Tangkap elemen DOM
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

// 3. Event listener untuk form submit
contactForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah reload halaman

  // 4. Kirim form via EmailJS
  emailjs
    .sendForm(
      'service_3zvvhd4', // Ganti dengan Service ID sebenarnya
      'template_014khjt', // Ganti dengan Template ID sebenarnya
      '#contactForm'
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        successMessage.classList.remove('d-none');
        errorMessage.classList.add('d-none');
        contactForm.reset(); // Reset form setelah sukses
      },
      (error) => {
        console.error('FAILED...', error);
        successMessage.classList.add('d-none');
        errorMessage.classList.remove('d-none');
      }
    );
});
