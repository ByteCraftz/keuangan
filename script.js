// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('donationForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah pengiriman formulir default
  
      // Validasi formulir sebelum pengiriman
      if (validateForm()) {
        // Kirim data formulir
        const formData = new FormData(form);
        sendData(formData);
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      // Validasi nama
      const nameInput = document.getElementById('name');
      if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Nama tidak boleh kosong');
        nameInput.focus();
        return false;
      }
  
      // Validasi email
      const emailInput = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        isValid = false;
        alert('Email tidak valid');
        emailInput.focus();
        return false;
      }
  
      // Validasi jumlah donasi
      const amountInput = document.getElementById('amount');
      if (isNaN(amountInput.value) || parseFloat(amountInput.value) <= 0) {
        isValid = false;
        alert('Jumlah donasi tidak valid');
        amountInput.focus();
        return false;
      }
  
      return isValid;
    }
  
    function sendData(formData) {
      // Simulasi pengiriman data (Anda bisa mengirimkan data ini ke server Anda)
      console.log('Data yang akan dikirim:', formData);
  
      // Tampilkan pesan sukses
      alert('Terima kasih atas donasinya!');
      
      // Reset formulir setelah pengiriman berhasil
      form.reset();
    }
  });